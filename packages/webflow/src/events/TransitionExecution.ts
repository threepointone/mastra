
                    import { EventHandler } from '@arkw/core';
                    import { TransitionExecutionFields } from '../constants';
                    import { WebflowIntegration } from '..';

                    export const TransitionExecution: EventHandler<WebflowIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-TransitionExecution`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { transitionId,executionId, transitionId,executionId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/transitions/{transitionId}/executions/{executionId}'].get({
                                query: {transitionId,executionId,},
                                params: {transitionId,executionId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `TransitionExecution`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `TransitionExecution`,
                                properties: TransitionExecutionFields,
                            });
                        },
                })
                