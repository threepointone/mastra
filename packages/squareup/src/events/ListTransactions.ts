
                    import { EventHandler } from '@arkw/core';
                    import { ListTransactionsResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const ListTransactions: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-ListTransactionsResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { location_id,begin_time,end_time,sort_order,cursor, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2/locations/{location_id}/transactions'].get({
                                query: {location_id,begin_time,end_time,sort_order,cursor,},
                                params: {location_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ListTransactionsResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ListTransactionsResponse`,
                                properties: ListTransactionsResponseFields,
                            });
                        },
                })
                