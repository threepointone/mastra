
                    import { EventHandler } from '@arkw/core';
                    import { tax.transactionFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetTaxTransactionsTransaction: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-tax.transaction`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { expand,transaction, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/tax/transactions/{transaction}'].get({
                                query: {expand,transaction,},
                                params: {transaction,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `tax.transaction`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `tax.transaction`,
                                properties: tax.transactionFields,
                            });
                        },
                })
                