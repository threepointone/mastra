
                    import { EventHandler } from '@arkw/core';
                    import { payment_linkFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetPaymentLinks: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-payment_link`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { active,ending_before,expand,limit,starting_after,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/payment_links'].get({
                                query: {active,ending_before,expand,limit,starting_after,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `payment_link`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `payment_link`,
                                properties: payment_linkFields,
                            });
                        },
                })
                