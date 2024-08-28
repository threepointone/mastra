
                    import { EventHandler } from '@arkw/core';
                    import { LogsFields } from '../constants';
                    import { WebflowIntegration } from '..';

                    export const Logs: EventHandler<WebflowIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Logs`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { workflowId,nextToken,order,transitionExecutionId,transitionId,maxResults,workflowExecutionId, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/logs'].get({
                                query: {workflowId,nextToken,order,transitionExecutionId,transitionId,maxResults,workflowExecutionId,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Logs`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Logs`,
                                properties: LogsFields,
                            });
                        },
                })
                