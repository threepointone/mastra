
                    import { EventHandler } from '@arkw/core';
                    import { refundFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetChargesChargeRefunds: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-refund`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { charge,ending_before,expand,limit,starting_after, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/charges/{charge}/refunds'].get({
                                query: {charge,ending_before,expand,limit,starting_after,},
                                params: {charge,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `refund`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `refund`,
                                properties: refundFields,
                            });
                        },
                })
                