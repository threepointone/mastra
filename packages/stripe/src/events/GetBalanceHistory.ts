
                    import { EventHandler } from '@arkw/core';
                    import { balance_transactionFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetBalanceHistory: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-balance_transaction`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { created,currency,ending_before,expand,limit,payout,source,starting_after,type,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v1/balance/history'].get({
                                query: {created,currency,ending_before,expand,limit,payout,source,starting_after,type,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `balance_transaction`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `balance_transaction`,
                                properties: balance_transactionFields,
                            });
                        },
                })
                