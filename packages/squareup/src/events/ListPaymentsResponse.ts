
                    import { EventHandler } from '@arkw/core';
                    import { ListPaymentsResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const ListPaymentsResponse: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-ListPaymentsResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { begin_time,end_time,sort_order,cursor,location_id,total,last_4,card_brand,limit,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2/payments'].get({
                                query: {begin_time,end_time,sort_order,cursor,location_id,total,last_4,card_brand,limit,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ListPaymentsResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ListPaymentsResponse`,
                                properties: ListPaymentsResponseFields,
                            });
                        },
                })
                