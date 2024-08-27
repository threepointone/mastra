
                    import { EventHandler } from '@arkw/core';
                    import { StripeIntegration } from '..';

                    export const GetCustomersCustomerCashBalanceTransactions: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-customer_cash_balance_transaction`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {},
                })
                