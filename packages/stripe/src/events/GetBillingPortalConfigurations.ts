
                    import { EventHandler } from '@arkw/core';
                    import { StripeIntegration } from '..';

                    export const GetBillingPortalConfigurations: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-billing_portal.configuration`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {},
                })
                