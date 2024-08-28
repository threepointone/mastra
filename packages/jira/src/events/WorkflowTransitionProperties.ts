
                    import { EventHandler } from '@arkw/core';
                    import { WorkflowTransitionPropertyFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const WorkflowTransitionProperties: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-WorkflowTransitionProperty`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { transitionId,includeReservedKeys,key,workflowName,workflowMode, transitionId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/rest/api/3/workflow/transitions/{transitionId}/properties'].get({
                                query: {transitionId,includeReservedKeys,key,workflowName,workflowMode,},
                                params: {transitionId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `WorkflowTransitionProperty`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `WorkflowTransitionProperty`,
                                properties: WorkflowTransitionPropertyFields,
                            });
                        },
                })
                