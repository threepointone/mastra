
                    import { EventHandler } from '@arkw/core';
                    import { payoutFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetPayoutsPayout: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-payout`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { expand,payout, payout,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v1/payouts/{payout}'].get({
                                query: {expand,payout,},
                                params: {payout,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `payout`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `payout`,
                                properties: payoutFields,
                            });
                        },
                })
                