
                    import { EventHandler } from '@arkw/core';
                    import { WorkflowFields } from '../constants';
                    import { WebflowIntegration } from '..';

                    export const Workflow: EventHandler<WebflowIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-Workflow`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { workflowId, workflowId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/workflows/{workflowId}'].get({
                                query: {workflowId,},
                                params: {workflowId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Workflow`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Workflow`,
                                properties: WorkflowFields,
                            });
                        },
                })
                