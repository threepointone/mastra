import { createAnthropic } from '@ai-sdk/anthropic';
import { createOpenAI } from '@ai-sdk/openai';
import {
  CoreMessage,
  CoreTool as CT,
  generateText,
  LanguageModelV1,
  streamText,
  tool,
} from 'ai';
import { z, ZodSchema } from 'zod';
import { AllTools, CoreTool, ToolApi } from '../tools/types';
import { delay } from '../utils';
import { Integration } from '../integration';
import { createLogger, Logger } from '../logger';
import { CustomModelConfig, ModelConfig } from './types';

export class LLM<
  TTools,
  TIntegrations extends Integration[] | undefined = undefined,
  TKeys extends keyof AllTools<TTools, TIntegrations> = keyof AllTools<
    TTools,
    TIntegrations
  >,
> {
  #tools: Record<TKeys, ToolApi>;
  logger: Logger;

  constructor(logger?: Logger) {
    this.#tools = {} as Record<TKeys, ToolApi>;
    this.logger = logger || createLogger({ type: 'CONSOLE' });
  }

  /**
   * Set the concrete tools for the agent
   * @param tools
   */
  __setTools(tools: Record<TKeys, ToolApi>) {
    this.#tools = tools;
    this.logger.debug(`Tools set for LLM`, tools);
  }

  getModelType(model: ModelConfig): string {
    if (!('provider' in model)) {
      throw new Error('Model provider is required');
    }

    const providerToType: Record<string, string> = {
      OPEN_AI: 'openai',
      ANTHROPIC: 'anthropic',
      GROQ: 'groq',
      PERPLEXITY: 'perplexity',
      FIREWORKS: 'fireworks',
    };
    const type = providerToType[model.provider] || 'openai';
    this.logger.debug(
      `Model type resolved to ${type} for provider ${model.provider}`
    );
    return type;
  }

  createOpenAICompatibleModel(
    baseURL: string,
    apiKey: string,
    defaultModelName: string,
    modelName?: string
  ): LanguageModelV1 {
    this.logger.debug(
      `Creating OpenAI compatible model with baseURL: ${baseURL}`
    );
    const client = createOpenAI({
      baseURL,
      apiKey,
    });
    return client(modelName || defaultModelName);
  }

  createModelDef({
    model,
  }: {
    model: { type: string; name?: string; toolChoice?: 'auto' | 'required', apiKey?: string };
  }): LanguageModelV1 {
    let modelDef: LanguageModelV1;
    if (model.type === 'openai') {
      this.logger.info(
        `Initializing OpenAI model ${model.name || 'gpt-4o-2024-08-06'}`
      );
      const openai = createOpenAI({
        apiKey: model?.apiKey || process.env.OPENAI_API_KEY,
      });
      modelDef = openai(model.name || 'gpt-4o-2024-08-06', {
        structuredOutputs: true,
      });
    } else if (model.type === 'anthropic') {
      this.logger.info(
        `Initializing Anthropic model ${
          model.name || 'claude-3-5-sonnet-20240620'
        }`
      );
      const anthropic = createAnthropic({
        apiKey: model?.apiKey || process.env.ANTHROPIC_API_KEY,
      });
      modelDef = anthropic(model.name || 'claude-3-5-sonnet-20240620');
    } else if (model.type === 'groq') {
      this.logger.info(
        `Initializing Groq model ${model.name || 'llama-3.2-90b-text-preview'}`
      );
      modelDef = this.createOpenAICompatibleModel(
        'https://api.groq.com/openai/v1',
        model?.apiKey || process.env.GROQ_API_KEY || '',
        'llama-3.2-90b-text-preview',
        model.name
      );
    } else if (model.type === 'perplexity') {
      this.logger.info(
        `Initializing Perplexity model ${
          model.name || 'llama-3.1-sonar-large-128k-chat'
        }`
      );
      modelDef = this.createOpenAICompatibleModel(
        'https://api.perplexity.ai/',
        model?.apiKey || process.env.PERPLEXITY_API_KEY || '',
        'llama-3.1-sonar-large-128k-chat',
        model.name
      );
    } else if (model.type === 'fireworks') {
      this.logger.info(
        `Initializing Fireworks model ${
          model.name || 'llama-v3p1-70b-instruct'
        }`
      );
      modelDef = this.createOpenAICompatibleModel(
        'https://api.fireworks.ai/inference/v1',
        model?.apiKey || process.env.FIREWORKS_API_KEY || '',
        'llama-v3p1-70b-instruct',
        model.name
      );
    } else {
      const error = `Invalid model type: ${model.type}`;
      this.logger.error(error);
      throw new Error(error);
    }

    return modelDef;
  }

  getParams({
    tools,
    resultTool,
    model,
  }: {
    tools: Record<string, CoreTool>;
    resultTool?: { description: string; parameters: ZodSchema };
    model: { type: string; name?: string; toolChoice?: 'auto' | 'required', apiKey?: string } | CustomModelConfig;
  }) {
    const toolsConverted = Object.entries(tools).reduce(
      (memo, [key, val]) => {
        memo[key] = tool(val);
        return memo;
      },
      {} as Record<string, CT>
    );

    let answerTool = {};
    if (resultTool) {
      answerTool = { answer: tool(resultTool) };
    }

    let modelDef

    if ('type' in model) {
      modelDef = this.createModelDef({ model });
    } else {
      modelDef = model.model
    }

    return {
      toolsConverted,
      modelDef,
      answerTool,
      toolChoice: model.toolChoice || 'required',
    };
  }

  convertTools(
    enabledTools?: Partial<Record<TKeys, boolean>>
  ): Record<TKeys, CoreTool> {
    const converted = Object.entries(enabledTools || {}).reduce(
      (memo, value) => {
        const k = value[0] as TKeys;
        const enabled = value[1] as boolean;
        const tool = this.#tools[k];

        if (enabled && tool) {
          memo[k] = {
            description: tool.description,
            parameters: z.object({
              data: tool.schema,
            }),
            execute: tool.executor,
          };
        }
        return memo;
      },
      {} as Record<TKeys, CoreTool>
    );

    this.logger.debug(`Converted tools for LLM`, converted);
    return converted;
  }

  async text({
    model,
    messages,
    onStepFinish,
    maxSteps = 5,
    enabledTools,
  }: {
    enabledTools?: Partial<Record<TKeys, boolean>>;
    model: ModelConfig;
    messages: CoreMessage[];
    onStepFinish?: (step: string) => void;
    maxSteps?: number;
  }) {

    let modelToPass
    if ('name' in model) {
      modelToPass = {
        type: this.getModelType(model),
        name: model.name,
        toolChoice: model.toolChoice,
        apiKey: model?.apiKey,
      }
    } else {
      modelToPass = model
    }

    const params = this.getParams({
      tools: this.convertTools(enabledTools || {}),
      model: modelToPass,
    });

    const argsForExecute = {
      model: params.modelDef,
      tools: {
        ...params.toolsConverted,
        ...params.answerTool,
      },
      toolChoice: params.toolChoice,
      maxSteps,
      onStepFinish: async (props: any) => {
        onStepFinish?.(JSON.stringify(props, null, 2));
        if (
          props?.response?.headers?.['x-ratelimit-remaining-tokens'] &&
          parseInt(
            props?.response?.headers?.['x-ratelimit-remaining-tokens'],
            10
          ) < 2000
        ) {
          this.logger.warn('Rate limit approaching, waiting 10 seconds');
          await delay(10 * 1000);
        }
      },
    };

    this.logger.debug(`Generating text with ${messages.length} messages`);
    return await generateText({
      messages,
      ...argsForExecute,
    });
  }

  async stream({
    model,
    messages,
    onStepFinish,
    onFinish,
    maxSteps = 5,
    enabledTools,
  }: {
    model: ModelConfig;
    enabledTools: Partial<Record<TKeys, boolean>>;
    messages: CoreMessage[];
    onStepFinish?: (step: string) => void;
    onFinish?: (result: string) => Promise<void> | void;
    maxSteps?: number;
  }) {
    let modelToPass
    if ('name' in model) {
      modelToPass = {
        type: this.getModelType(model),
        name: model.name,
        toolChoice: model.toolChoice,
        apiKey: model?.apiKey,
      }
    } else {
      modelToPass = model
    }

    const params = this.getParams({
      tools: this.convertTools(enabledTools),
      model: modelToPass,
    });

    const argsForExecute = {
      model: params.modelDef,
      tools: {
        ...params.toolsConverted,
        ...params.answerTool,
      },
      toolChoice: params.toolChoice,
      maxSteps,
      onStepFinish: async (props: any) => {
        onStepFinish?.(JSON.stringify(props, null, 2));
        if (
          props?.response?.headers?.['x-ratelimit-remaining-tokens'] &&
          parseInt(
            props?.response?.headers?.['x-ratelimit-remaining-tokens'],
            10
          ) < 2000
        ) {
          this.logger.warn('Rate limit approaching, waiting 10 seconds');
          await delay(10 * 1000);
        }
      },
      onFinish: async (props: any) => {
        onFinish?.(JSON.stringify(props, null, 2));
      },
    };

    this.logger.debug(`Streaming text with ${messages.length} messages`);
    return await streamText({
      messages,
      ...argsForExecute,
    });
  }
}
