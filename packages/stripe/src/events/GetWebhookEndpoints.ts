
                    import { EventHandler } from '@arkw/core';
                    import { StripeIntegration } from '..';

                    export const GetWebhookEndpoints: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-webhook_endpoint`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {},
                })
                