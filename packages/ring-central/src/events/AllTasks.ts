
                    import { EventHandler } from '@arkw/core';
                    import { GetAllTasksResponseFields } from '../constants';
                    import { Ring-centralIntegration } from '..';

                    export const AllTasks: EventHandler<Ring-centralIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-GetAllTasksResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { queue,channel_id,step,offset,limit, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/tasks'].get({
                                query: {queue,channel_id,step,offset,limit,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `GetAllTasksResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `GetAllTasksResponse`,
                                properties: GetAllTasksResponseFields,
                            });
                        },
                })
                