
                    import { EventHandler } from '@arkw/core';
                    import { TransitionExecutionsFields } from '../constants';
                    import { WebflowIntegration } from '..';

                    export const TransitionExecutions: EventHandler<WebflowIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-TransitionExecutions`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { nextToken,order,executionId,transitionId,status,maxResults,sortBy, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/transitions/{transitionId}/executions'].get({
                                query: {nextToken,order,executionId,transitionId,status,maxResults,sortBy,},
                                params: {transitionId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `TransitionExecutions`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `TransitionExecutions`,
                                properties: TransitionExecutionsFields,
                            });
                        },
                })
                