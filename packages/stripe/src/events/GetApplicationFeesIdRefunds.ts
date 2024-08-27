
                    import { EventHandler } from '@arkw/core';
                    import { StripeIntegration } from '..';

                    export const GetApplicationFeesIdRefunds: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-fee_refund`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {},
                })
                