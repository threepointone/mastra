
                    import { EventHandler } from '@arkw/core';
                    import { ActivityHistoryFields } from '../constants';
                    import { SalesloftIntegration } from '..';

                    export const ActivityHistory: EventHandler<SalesloftIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-ActivityHistory`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { per_page,page,include_paging_counts,sort_by,sort_direction,type,_resource,occurred_at,pinned,resource_type,resource_id,updated_at,user_guid,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2/activity_histories'].get({
                                query: {per_page,page,include_paging_counts,sort_by,sort_direction,type,_resource,occurred_at,pinned,resource_type,resource_id,updated_at,user_guid,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ActivityHistory`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ActivityHistory`,
                                properties: ActivityHistoryFields,
                            });
                        },
                })
                