
                    import { EventHandler } from '@arkw/core';
                    import { WorkflowExecutionsFields } from '../constants';
                    import { WebflowIntegration } from '..';

                    export const WorkflowExecutions: EventHandler<WebflowIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-WorkflowExecutions`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { fromStartTime,toStartTime,workflowId,nextToken,order,status,maxResults,sortBy, workflowId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/workflows/{workflowId}/executions'].get({
                                query: {fromStartTime,toStartTime,workflowId,nextToken,order,status,maxResults,sortBy,},
                                params: {workflowId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `WorkflowExecutions`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `WorkflowExecutions`,
                                properties: WorkflowExecutionsFields,
                            });
                        },
                })
                