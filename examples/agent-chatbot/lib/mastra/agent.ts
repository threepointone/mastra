import { getAgent } from "@mastra/agent-core";
import { omitBy } from 'lodash';
import { mastra } from "./framework";
import { getAgentBlueprint } from "./utils";

export async function agentExecutor({ agentId, connectionId }: { agentId: string, connectionId: string }) {
    const apis = mastra.getApis()
    const systemApis = apis.get('agent-chatbot') as Record<string, any>

    const finalApis = omitBy(systemApis, (v: any, k: string) => k === 'send_slack_message')

    const agentBlueprint = getAgentBlueprint(agentId)
    
    const executor = await getAgent({ connectionId, agent: agentBlueprint, apis: finalApis })
    console.log(executor)
    return executor
}