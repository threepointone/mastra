
                    import { EventHandler } from '@arkw/core';
                    import { StripeIntegration } from '..';

                    export const GetSubscriptionSchedules: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-subscription_schedule`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {},
                })
                