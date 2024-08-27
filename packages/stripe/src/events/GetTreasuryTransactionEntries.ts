
                    import { EventHandler } from '@arkw/core';
                    import { StripeIntegration } from '..';

                    export const GetTreasuryTransactionEntries: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-treasury.transaction_entry`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {},
                })
                