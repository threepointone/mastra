
                    import { EventHandler } from '@arkw/core';
                    import { WorkflowExecutionFields } from '../constants';
                    import { WebflowIntegration } from '..';

                    export const WorkflowExecution: EventHandler<WebflowIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-WorkflowExecution`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { executionId,workflowId, workflowId,executionId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/workflows/{workflowId}/executions/{executionId}'].get({
                                query: {executionId,workflowId,},
                                params: {workflowId,executionId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `WorkflowExecution`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `WorkflowExecution`,
                                properties: WorkflowExecutionFields,
                            });
                        },
                })
                