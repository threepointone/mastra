
                    import { EventHandler } from '@arkw/core';
                    import { treasury.transaction_entryFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetTreasuryTransactionEntries: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-treasury.transaction_entry`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { created,effective_at,ending_before,expand,financial_account,limit,order_by,starting_after,transaction, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/treasury/transaction_entries'].get({
                                query: {created,effective_at,ending_before,expand,financial_account,limit,order_by,starting_after,transaction,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `treasury.transaction_entry`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `treasury.transaction_entry`,
                                properties: treasury.transaction_entryFields,
                            });
                        },
                })
                