
                    import { EventHandler } from '@arkw/core';
                    import { StripeIntegration } from '..';

                    export const GetTreasuryReceivedDebits: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-treasury.received_debit`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {},
                })
                