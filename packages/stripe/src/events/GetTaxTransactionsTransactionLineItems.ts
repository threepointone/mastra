
                    import { EventHandler } from '@arkw/core';
                    import { tax.transaction_line_itemFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetTaxTransactionsTransactionLineItems: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-tax.transaction_line_item`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { ending_before,expand,limit,starting_after,transaction, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/tax/transactions/{transaction}/line_items'].get({
                                query: {ending_before,expand,limit,starting_after,transaction,},
                                params: {transaction,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `tax.transaction_line_item`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `tax.transaction_line_item`,
                                properties: tax.transaction_line_itemFields,
                            });
                        },
                })
                