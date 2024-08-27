
                    import { EventHandler } from '@arkw/core';
                    import { StripeIntegration } from '..';

                    export const GetApplePayDomains: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-apple_pay_domain`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {},
                })
                