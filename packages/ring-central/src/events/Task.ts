
                    import { EventHandler } from '@arkw/core';
                    import { TaskFields } from '../constants';
                    import { Ring-centralIntegration } from '..';

                    export const Task: EventHandler<Ring-centralIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Task`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { taskId, taskId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/tasks/{taskId}'].get({
                                query: {taskId,},
                                params: {taskId,} })

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
                