
                    import { EventHandler } from '@arkw/core';
                    import { customer_cash_balance_transactionFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetCustomersCustomerCashBalanceTransactions: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-customer_cash_balance_transaction`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })
                            const response = await proxy['/v1/customers/{customer}/cash_balance_transactions'].get()

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `customer_cash_balance_transaction`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `customer_cash_balance_transaction`,
                                properties: customer_cash_balance_transactionFields,
                            });
                        },
                })
                