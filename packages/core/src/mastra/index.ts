import { Integration } from '../integration';
import { Agent } from '../agent';
import { createLogger, Logger, RegisteredLogger } from '../logger';
import { SyncConfig } from '../sync/types';
import { AllTools, ToolApi } from '../tools/types';
import { MastraEngine } from '../engine';
import { MastraVector } from '../vector';
import { LLM } from '../llm';
import { z } from 'zod';
import { Workflow } from '../workflows';

export class Mastra<
  TIntegrations extends Integration[],
  MastraTools extends Record<string, any>,
  TSyncs extends Record<
    string,
    SyncConfig<TIntegrations, MastraTools, any>
  > = Record<never, never>,
> {
  private engine?: MastraEngine;
  private vectors?: Record<string, MastraVector>;
  private tools: AllTools<MastraTools, TIntegrations>;
  private agents: Map<string, Agent<MastraTools, TIntegrations>>;
  llm: LLM<
    MastraTools,
    TIntegrations,
    keyof AllTools<MastraTools, TIntegrations>
  >;
  private integrations: Map<string, Integration>;
  private logger: Map<RegisteredLogger, Logger>;
  private syncs: TSyncs;
  private workflows: Map<string, Workflow> = new Map();

  constructor(config: {
    tools?: MastraTools;
    syncs?: TSyncs;
    agents?: Agent<MastraTools, TIntegrations>[];
    integrations?: TIntegrations;
    engine?: MastraEngine;
    vectors?: Record<string, MastraVector>;
    logger?: Logger;
    workflows?: Workflow[];
  }) {
    this.logger = new Map();

    let logger: Logger = createLogger({ type: 'CONSOLE' });

    if (config.logger) {
      logger = config.logger;
    }

    this.setLogger({ key: 'AGENT', logger });
    this.setLogger({ key: 'WORKFLOW', logger });

    this.integrations = new Map();

    config.integrations?.forEach((integration) => {
      if (this.integrations.has(integration.name)) {
        throw new Error(
          `Integration with name ${integration.name} already exists`
        );
      }
      this.integrations.set(integration.name, integration);
    });

    const integrationTools =
      config.integrations?.reduce(
        (acc, integration) => ({
          ...acc,
          ...integration.tools,
        }),
        {}
      ) || {};

    const configuredTools = config?.tools || {};

    // Merge custom tools with integration tools
    const allTools = {
      ...configuredTools,
      ...integrationTools,
    } as MastraTools;

    // Hydrate tools with integration tools
    const hydratedTools = Object.entries(allTools ?? {}).reduce<
      Record<string, ToolApi>
    >((memo, [key, val]) => {
      memo[key] = {
        ...val,
        executor: (params) => {
          return val.executor({
            ...params,
            getIntegration: <I>(name: TIntegrations[number]['name']) =>
              this.getIntegration(name) as I,
            agents: this.agents,
            llm: this.llm,
            engine: this.engine,
          });
        },
      };
      return memo;
    }, {});

    this.tools = hydratedTools as AllTools<MastraTools, TIntegrations>;
    this.agents = new Map();

    this.llm = new LLM<
      MastraTools,
      TIntegrations,
      keyof AllTools<MastraTools, TIntegrations>
    >();
    this.llm.__setTools(this.tools);

    config.agents?.forEach((agent) => {
      if (this.agents.has(agent.name)) {
        throw new Error(`Agent with name ${agent.name} already exists`);
      }
      this.agents.set(agent.name, agent);
      agent.__setTools(this.tools);
      const agentLogger = this.getLogger('AGENT');
      if (agentLogger) {
        agent.__setLogger(agentLogger);
      }
    });

    config.workflows?.forEach((workflow) => {
      if (this.workflows.has(workflow.name)) {
        throw new Error(`Workflow with name ${workflow.name} already exists`);
      }
      this.workflows.set(workflow.name, workflow);
    });

    if (config.syncs && !config.engine) {
      throw new Error('Engine is required to run syncs');
    }

    this.syncs = (config.syncs || {}) as TSyncs;

    if (config.engine) {
      this.engine = config.engine;
    }

    if (config.vectors) {
      this.vectors = config.vectors;
    }
  }
  public async sync<K extends keyof TSyncs>(
    key: K,
    params: TSyncs[K] extends SyncConfig<any, any, infer P> ? P : never
  ): Promise<void> {
    if (!this.engine) {
      throw new Error(`Sync function ${key as string} not found`);
    }

    const syncFn = this.syncs?.[key];

    if (!syncFn) {
      throw new Error(`Sync function ${key as string} not found`);
    }

    await syncFn({
      tools: this.tools,
      params,
      engine: this.engine,
      agents: this.agents,
      vectors: this.vectors,
      llm: this.llm,
    });
  }

  public getAgent(name: string) {
    const agent = this.agents.get(name);
    if (!agent) {
      throw new Error(`Agent with name ${name} not found`);
    }
    return agent;
  }

  public getIntegration<I extends TIntegrations[number]['name']>(name: I) {
    const stringifiedName = String(name);
    const integration = this.integrations.get(stringifiedName.toUpperCase());

    if (!integration) {
      throw new Error(`Integration with name ${stringifiedName} not found`);
    }
    return integration as Extract<TIntegrations[number], { name: I }>;
  }

  public getTool<T extends keyof MastraTools>(name: T) {
    const tool = this.tools[name];

    if (!tool) {
      throw new Error(`Tool with name ${String(name)} not found`);
    }

    const toolSchema = tool.schema as MastraTools[T]['schema'];

    return {
      ...tool,
      execute: async (params: z.infer<typeof toolSchema>) => {
        return tool.executor({
          data: params,
          toolIntegrations: () => ({
            get: <I extends TIntegrations[number]['name']>(name: I) =>
              this.getIntegration(name) as Extract<
                TIntegrations[number],
                { name: I }
              >,
          }),
          agents: this.agents,
          llm: this.llm,
          engine: this.engine,
        });
      },
    };
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

  public setLogger({ key, logger }: { key: RegisteredLogger; logger: Logger }) {
    this.logger.set(key, logger);
  }

  public getLogger(key: RegisteredLogger) {
    return this.logger.get(key);
  }
}
