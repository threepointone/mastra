
                    import { EventHandler } from '@arkw/core';
                    import { StripeIntegration } from '..';

                    export const GetTreasuryTransactions: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-treasury.transaction`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {},
                })
                