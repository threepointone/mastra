import { z } from "zod"
import { getAssistantAgent } from "./assistant"
import { createAgent } from "./vercel"

export async function getAgent({ connectionId, agent, apis }: { connectionId: string, agent: Record<string, any>, apis: Record<string, any> }) {
    if (agent.model.provider === 'OPEN_AI_ASSISTANT') {
        const tools = Object.keys(agent.tools)
        const toolMap = Object.entries(apis).reduce((memo, [k, def]) => {
            if (tools.includes(k)) {
                memo[k] = async (props: any) => {
                    return def.executor({
                        data: props,
                        ctx: { connectionId, triggerEvent: () => { } }
                    })
                }
            }
            return memo
        }, {} as Record<string, any>)

        const assistant = await getAssistantAgent({ id: agent.id, toolMap })
        return assistant
    } else if (['OPEN_AI_VERCEL', 'ANTHROPIC_VERCEL'].includes(agent.model.provider)) {
        const keyToModel: Record<string, string> = {
            'OPEN_AI_VERCEL': 'openai',
            'ANTHROPIC_VERCEL': 'anthropic',
        }

        const tools = Object.keys(agent.tools)

        const toolMap = Object.entries(apis).reduce((memo, [k, def]) => {
            if (tools.includes(k)) {
                memo[k] = {
                    description: def.label,
                    parameters: def.schema,
                    execute: async (props: any) => {
                        return def.executor({
                            data: props,
                            ctx: { connectionId, triggerEvent: () => { } }
                        })
                    }
                }
            }
            return memo
        }, {} as Record<string, any>)

        let resultTool = undefined

        if (agent.outputs.structured) {
            const schema = Object.entries(agent.outputs.structured.schema as Record<string, any>).reduce((memo, [k, v]) => {
                if (v.type === 'string') {
                    memo[k] = z.string()
                }
                if (v.type === 'array') {
                    const itemType = v.type.items.type
                    if (itemType === 'string') {
                        memo[k] = z.array(z.string())
                    }
                }
                return memo
            }, {} as Record<string, any>)

            resultTool = {
                description: agent.outputs.structured.description,
                parameters: z.object(schema),
            }
        }

        return createAgent({
            agent_instructions: agent.agent_instructions,
            model: {
                type: keyToModel[agent.model.provider],
                name: agent.model.name,
            },
            tools: toolMap,
            resultTool,
        })
    }
}