
                    import { EventHandler } from '@arkw/core';
                    import { ListPaymentRefundsResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const ListPaymentRefunds: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-ListPaymentRefundsResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { begin_time,end_time,sort_order,cursor,location_id,status,source_type,limit, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2/refunds'].get({
                                query: {begin_time,end_time,sort_order,cursor,location_id,status,source_type,limit,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ListPaymentRefundsResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ListPaymentRefundsResponse`,
                                properties: ListPaymentRefundsResponseFields,
                            });
                        },
                })
                