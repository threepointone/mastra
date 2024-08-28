
                    import { EventHandler } from '@arkw/core';
                    import { treasury.transactionFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetTreasuryTransactions: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-treasury.transaction`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { created,ending_before,expand,financial_account,limit,order_by,starting_after,status,status_transitions,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/treasury/transactions'].get({
                                query: {created,ending_before,expand,financial_account,limit,order_by,starting_after,status,status_transitions,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `treasury.transaction`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `treasury.transaction`,
                                properties: treasury.transactionFields,
                            });
                        },
                })
                