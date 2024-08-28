
                    import { EventHandler } from '@arkw/core';
                    import { taskFields } from '../constants';
                    import { AttioIntegration } from '..';

                    export const v2Tasks: EventHandler<AttioIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-task`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { limit,offset,sort,linked_object,linked_record_id,assignee,is_completed,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2/tasks'].get({
                                query: {limit,offset,sort,linked_object,linked_record_id,assignee,is_completed,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `task`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `task`,
                                properties: taskFields,
                            });
                        },
                })
                