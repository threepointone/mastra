
                    import { EventHandler } from '@arkw/core';
                    import { StripeIntegration } from '..';

                    export const GetCustomersCustomerCards: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-card`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {},
                })
                