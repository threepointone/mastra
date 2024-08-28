
                    import { EventHandler } from '@arkw/core';
                    import { AgentStatusFields } from '../constants';
                    import { Ring-centralIntegration } from '..';

                    export const AgentStatus: EventHandler<Ring-centralIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-AgentStatus`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { agentId, agentId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/status/{agentId}'].get({
                                query: {agentId,},
                                params: {agentId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `AgentStatus`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `AgentStatus`,
                                properties: AgentStatusFields,
                            });
                        },
                })
                