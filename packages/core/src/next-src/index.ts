import { z, ZodSchema } from 'zod';

export interface IntegrationApiExcutorParams<
    T extends Record<string, any> = Record<string, any>
> {
    data: T;
}

export type ToolApi<
    IN extends Record<string, any> = Record<string, any>,
    OUT extends Record<string, any> = Record<string, any>
> = {
    // integrationName: string;
    schema:
    | ZodSchema<IN>
    // | (({ ctx }: { ctx: IntegrationContext }) => Promise<ZodSchema<IN>>);
    //   outputSchema?:
    //     | ZodSchema
    //     | (({ ctx }: { ctx: IntegrationContext }) => Promise<ZodSchema<OUT>>);
    //   type: string;
    label: string;
    //   getSchemaOptions?: ({
    //     ctx,
    //   }: {
    //     ctx: IntegrationContext;
    //   }) => Promise<Record<string, SchemaFieldOptions>>;
    //   icon?: frameWorkIcon;
    description: string;
    documentation?: string;
    //   category?: string;
    executor: (params: IntegrationApiExcutorParams<IN>) => Promise<OUT>;
    //   isHidden?: boolean;
    //   source?: string;
};

type ToolRecord = Record<string, ToolApi<Record<string, any>, Record<string, any>>>;



export function createTool(opts: ToolApi): ToolApi {
    return opts;
}

export abstract class Integration {
    abstract readonly tools: Record<string, ToolApi>;
    name: string = '';
}

// Helper to extract tools from array of integrations
type IntegrationTools<T extends Integration> = T['tools'];

// Helper to merge all tools from array of integrations
type MergeIntegrationTools<T extends Integration[]> = UnionToIntersection<IntegrationTools<T[number]>>;

// Helper for union to intersection conversion
type UnionToIntersection<U> =
    (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;


export class GmailIntegration extends Integration {
    constructor(config: { apiKey: string }) {
        super();
        this.name = 'Gmail';
    }

    readonly tools = {
        gmailGetProfile: createTool({
            label: 'Get Gmail Profile',
            schema: z.object({}),
            description: 'Get the profile of the authenticated user',
            executor: async () => {
                return { email: '' }
            }
        }),
    } as const;
}

// Helper to merge custom tools with integration tools
type AllTools<
    TTools extends ToolRecord | undefined = undefined,
    TIntegrations extends Integration[] | undefined = undefined
> = (TTools extends ToolRecord ? TTools : {}) &
    (TIntegrations extends Integration[] ? MergeIntegrationTools<TIntegrations> : {});


type OpenAIVercelModelNames =
    | 'gpt-4'
    | 'gpt-4-turbo'
    | 'gpt-3.5-turbo'

type OpenAIVercelConfig = {
    provider: 'OPEN_AI_VERCEL';
    name: OpenAIVercelModelNames;
    toolChoice: 'auto' | 'required';
};

type AnthropicVercelModelNames =
    | 'claude-3-opus-20240229'
    | 'claude-3-sonnet-20240229'
    | 'claude-3-haiku-20240307'
    | 'claude-3-5-sonnet-20240620'

type AnthropicVercelConfig = {
    provider: 'ANTHROPIC_VERCEL';
    name: AnthropicVercelModelNames
    toolChoice: 'auto' | 'required';
};

type GroqVercelModelNames =
    | 'llama3-groq-70b-8192-tool-use-preview'
    | 'llama3-groq-8b-8192-tool-use-preview'
    | 'gemma2-9b-it'
    | 'gemma-7b-it'

type GroqVercelConfig = {
    provider: 'GROQ_VERCEL';
    name: GroqVercelModelNames;
    toolChoice: 'auto' | 'required';
};

type ModelConfig =
    | OpenAIVercelConfig
    | AnthropicVercelConfig
    | GroqVercelConfig;

export class Agent<
    TTools extends Record<string, ToolApi> | undefined = undefined,
    TIntegrations extends Integration[] | undefined = undefined
> {
    public name: string;
    readonly instructions: string;
    readonly model: ModelConfig;
    readonly tools: Partial<Record<keyof AllTools<TTools, TIntegrations>, boolean>>;

    constructor(config: {
        name: string;
        instructions: string;
        model: ModelConfig;
        tools?: Partial<Record<keyof AllTools<TTools, TIntegrations>, boolean>>;
    }) {
        this.name = config.name;
        this.instructions = config.instructions;
        this.model = config.model;
        this.tools = config.tools || {};
    }
}

export class Mastra<
    MastraTools extends Record<string, ToolApi>,
    TIntegrations extends Integration[]
> {
    private tools: AllTools<MastraTools, TIntegrations>;
    private agents: Map<string, Agent<MastraTools, TIntegrations>>;
    private integrations: Map<string, Integration>;

    constructor(config: {
        tools: MastraTools;
        agents: Agent<MastraTools, TIntegrations>[];
        integrations: TIntegrations;
    }) {
        // Merge custom tools with integration tools
        this.tools = {
            ...(config.tools || {}),
            ...(config.integrations?.reduce((acc, integration) => ({
                ...acc,
                ...integration.tools
            }), {}) || {})
        } as AllTools<MastraTools, TIntegrations>;

        this.agents = new Map()

        config.agents.forEach(agent => {
            if (this.agents.has(agent.name)) {
                throw new Error(`Agent with name ${agent.name} already exists`)
            }
            this.agents.set(agent.name, agent)
        })

        this.integrations = new Map()

        config.integrations.forEach(integration => {
            if (this.integrations.has(integration.name)) {
                throw new Error(`Integration with name ${integration.name} already exists`)
            }
            this.integrations.set(integration.name, integration)
        })
    }

    public getAgent(name: string) {
        return this.agents.get(name);
    }

    public getIntegration(name: string) {
        return this.integrations.get(name);
    }

    public availableIntegrations() {
        return Array.from(this.integrations.entries()).map(
            ([name, integration]) => {
                return {
                    name,
                    integration,
                };
            }
        );
    }

    public getTools() {
        return this.tools;
    }
}