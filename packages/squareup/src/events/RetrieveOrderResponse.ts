
                    import { EventHandler } from '@arkw/core';
                    import { RetrieveOrderResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const RetrieveOrderResponse: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-RetrieveOrderResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { order_id, order_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2/orders/{order_id}'].get({
                                query: {order_id,},
                                params: {order_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `RetrieveOrderResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `RetrieveOrderResponse`,
                                properties: RetrieveOrderResponseFields,
                            });
                        },
                })
                