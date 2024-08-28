
                    import { EventHandler } from '@arkw/core';
                    import { TaskFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const _tasks_id: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-Task`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { task_id, task_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/tasks/{task_id}'].get({
                                query: {task_id,},
                                params: {task_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Task`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Task`,
                                properties: TaskFields,
                            });
                        },
                })
                