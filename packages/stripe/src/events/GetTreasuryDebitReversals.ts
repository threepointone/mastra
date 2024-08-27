
                    import { EventHandler } from '@arkw/core';
                    import { StripeIntegration } from '..';

                    export const GetTreasuryDebitReversals: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-treasury.debit_reversal`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {},
                })
                