import { createAnthropic } from '@ai-sdk/anthropic';
import { createOpenAI } from '@ai-sdk/openai';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { createMistral } from '@ai-sdk/mistral';
import { createXai } from '@ai-sdk/xai';
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
import { GoogleGenerativeAISettings, LLMProvider, ModelConfig } from './types';

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
    const providerToType: Record<LLMProvider, string> = {
      OPENAI_VERCEL: 'openai',
      ANTHROPIC_VERCEL: 'anthropic',
      GROQ_VERCEL: 'groq',
      PERPLEXITY_VERCEL: 'perplexity',
      FIREWORKS_VERCEL: 'fireworks',
      TOGETHER_AI_VERCEL: 'togetherai',
      LM_STUDIO_VERCEL: 'lmstuido',
      BASETEN_VERCEL: 'baseten',
      GOOGLE_VERCEL: 'google',
      MISTRAL_VERCEL: 'mistral',
      X_GROK_VERCEL: 'grok',
    };
    const type = providerToType[model.provider];

    if (!type) {
      const error = `Invalid provider: ${model.provider}`;
      this.logger.error(error);
      throw new Error(error);
    } else {
      this.logger.debug(
        `Model type resolved to ${type} for provider ${model.provider}`
      );
    }

    return type;
  }

  createOpenAICompatibleModel({
    baseURL,
    apiKey,
    defaultModelName,
    modelName,
    fetch,
  }: {
    baseURL: string;
    apiKey: string;
    defaultModelName: string;
    modelName?: string;
    fetch?: typeof globalThis.fetch;
  }): LanguageModelV1 {
    this.logger.debug(
      `Creating OpenAI compatible model with baseURL: ${baseURL}`
    );
    const client = createOpenAI({
      baseURL,
      apiKey,
      fetch,
    });
    return client(modelName || defaultModelName);
  }

  createModelDef({
    model,
  }: {
    model: {
      type: string;
      name?: string;
      toolChoice?: 'auto' | 'required';
      baseURL?: string;
      fetch?: typeof globalThis.fetch;
    } & GoogleGenerativeAISettings;
  }): LanguageModelV1 {
    let modelDef: LanguageModelV1;
    if (model.type === 'openai') {
      this.logger.info(
        `Initializing OpenAI model ${model.name || 'gpt-4o-2024-08-06'}`
      );
      const openai = createOpenAI({
        apiKey: process.env.OPENAI_API_KEY,
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
        apiKey: process.env.ANTHROPIC_API_KEY,
      });
      modelDef = anthropic(model.name || 'claude-3-5-sonnet-20240620');
    } else if (model.type === 'google') {
      this.logger.info(
        `Initializing Google model ${model.name || 'gemini-1.5-pro-latest'}`
      );
      const google = createGoogleGenerativeAI({
        baseURL: 'https://generativelanguage.googleapis.com/v1beta',
        apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY ?? '',
      });
      modelDef = google(model.name || 'gemini-1.5-pro-latest', {
        cachedContent: model.cachedContent,
        safetySettings: model.safetySettings,
        structuredOutputs: model.structuredOutputs,
      });
    } else if (model.type === 'groq') {
      this.logger.info(
        `Initializing Groq model ${model.name || 'llama-3.2-90b-text-preview'}`
      );
      modelDef = this.createOpenAICompatibleModel({
        baseURL: 'https://api.groq.com/openai/v1',
        apiKey: process.env.GROQ_API_KEY ?? '',
        defaultModelName: 'llama-3.2-90b-text-preview',
        modelName: model.name,
      });
    } else if (model.type === 'perplexity') {
      this.logger.info(
        `Initializing Perplexity model ${
          model.name || 'llama-3.1-sonar-large-128k-chat'
        }`
      );
      modelDef = this.createOpenAICompatibleModel({
        baseURL: 'https://api.perplexity.ai/',
        apiKey: process.env.PERPLEXITY_API_KEY ?? '',
        defaultModelName: 'llama-3.1-sonar-large-128k-chat',
        modelName: model.name,
      });
    } else if (model.type === 'fireworks') {
      this.logger.info(
        `Initializing Fireworks model ${
          model.name || 'llama-v3p1-70b-instruct'
        }`
      );
      modelDef = this.createOpenAICompatibleModel({
        baseURL: 'https://api.fireworks.ai/inference/v1',
        apiKey: process.env.FIREWORKS_API_KEY ?? '',
        defaultModelName: 'llama-v3p1-70b-instruct',
        modelName: model.name,
      });
    } else if (model.type === 'togetherai') {
      this.logger.info(
        `Initializing TogetherAI model ${model.name || 'google/gemma-2-9b-it'}`
      );
      modelDef = this.createOpenAICompatibleModel({
        baseURL: 'https://api.together.xyz/v1/',
        apiKey: process.env.TOGETHER_AI_API_KEY ?? '',
        defaultModelName: 'google/gemma-2-9b-it',
        modelName: model.name,
      });
    } else if (model.type === 'lmstudio') {
      this.logger.info(
        `Initializing LMStudio model ${model.name || 'llama-3.2-1b'}`
      );

      if (!model?.baseURL) {
        const error = `LMStudio model requires a baseURL`;
        this.logger.error(error);
        throw new Error(error);
      }
      modelDef = this.createOpenAICompatibleModel({
        baseURL: model.baseURL,
        apiKey: 'not-needed',
        defaultModelName: 'llama-3.2-1b',
        modelName: model.name,
      });
    } else if (model.type === 'baseten') {
      this.logger.info(
        `Initializing BaseTen model ${model.name || 'llama-3.1-70b-instruct'}`
      );
      if (model?.fetch) {
        const error = `Custom fetch is required to use ${model.type}. see https://docs.baseten.co/api-reference/openai for more information`;
        this.logger.error(error);
        throw new Error(error);
      }
      modelDef = this.createOpenAICompatibleModel({
        baseURL: 'https://bridge.baseten.co/v1/direct',
        apiKey: process.env.BASETEN_API_KEY ?? '',
        defaultModelName: 'llama-3.1-70b-instruct',
        modelName: model.name,
      });
    } else if (model.type === 'mistral') {
      this.logger.info(
        `Initializing Mistral model ${model.name || 'pixtral-large-latest'}`
      );
      const mistral = createMistral({
        baseURL: 'https://api.mistral.ai/v1',
        apiKey: process.env.MISTRAL_API_KEY ?? '',
      });

      modelDef = mistral(model.name || 'pixtral-large-latest');
    } else if (model.type === 'grok') {
      this.logger.info(
        `Initializing X Grok model ${model.name || 'grok-beta'}`
      );
      const xAi = createXai({
        baseURL: 'https://api.x.ai/v1',
        apiKey: process.env.XAI_API_KEY ?? '',
      });

      modelDef = xAi(model.name || 'grok-beta');
    } else {
      const error = `Invalid model type: ${model.type}`;
      this.logger.error(error);
      throw new Error(error);
    }

    return modelDef;
  }

  private getGoogleSettings(model: ModelConfig) {
    if (model.provider !== 'GOOGLE_VERCEL') {
      return undefined;
    }
    return {
      cachedContent: model.cachedContent,
      safetySettings: model.safetySettings,
      structuredOutputs: model.structuredOutputs,
    };
  }

  getParams({
    tools,
    resultTool,
    model,
  }: {
    tools: Record<string, CoreTool>;
    resultTool?: { description: string; parameters: ZodSchema };
    model: {
      type: string;
      name?: string;
      toolChoice?: 'auto' | 'required';
      baseURL?: string;
      fetch?: typeof globalThis.fetch;
    } & GoogleGenerativeAISettings;
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

    const modelDef = this.createModelDef({ model });

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
    const params = this.getParams({
      tools: this.convertTools(enabledTools || {}),
      model: {
        type: this.getModelType(model),
        name: model.name,
        toolChoice: model.toolChoice,
        baseURL:
          model.provider === 'LM_STUDIO_VERCEL' ? model.baseURL : undefined,
        fetch: model.provider === 'BASETEN_VERCEL' ? model.fetch : undefined,
        ...this.getGoogleSettings(model),
      },
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
    const params = this.getParams({
      tools: this.convertTools(enabledTools),
      model: {
        type: this.getModelType(model),
        name: model.name,
        toolChoice: model.toolChoice,
        baseURL:
          model.provider === 'LM_STUDIO_VERCEL' ? model.baseURL : undefined,
        fetch: model.provider === 'BASETEN_VERCEL' ? model.fetch : undefined,
        ...this.getGoogleSettings(model),
      },
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
