
                    import { EventHandler } from '@arkw/core';
                    import { payment_intentFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetPaymentIntentsSearch: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-payment_intent`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { expand,limit,page,query,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/payment_intents/search'].get({
                                query: {expand,limit,page,query,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `payment_intent`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `payment_intent`,
                                properties: payment_intentFields,
                            });
                        },
                })
                