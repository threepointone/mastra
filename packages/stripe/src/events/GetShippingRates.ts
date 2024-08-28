
                    import { EventHandler } from '@arkw/core';
                    import { shipping_rateFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetShippingRates: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-shipping_rate`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { active,created,currency,ending_before,expand,limit,starting_after, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/shipping_rates'].get({
                                query: {active,created,currency,ending_before,expand,limit,starting_after,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `shipping_rate`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `shipping_rate`,
                                properties: shipping_rateFields,
                            });
                        },
                })
                