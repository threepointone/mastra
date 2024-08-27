
                    import { EventHandler } from '@arkw/core';
                    import { StripeIntegration } from '..';

                    export const GetTaxTransactionsTransactionLineItems: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-tax.transaction_line_item`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {},
                })
                