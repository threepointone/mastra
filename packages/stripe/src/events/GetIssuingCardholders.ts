
                    import { EventHandler } from '@arkw/core';
                    import { StripeIntegration } from '..';

                    export const GetIssuingCardholders: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-issuing.cardholder`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {},
                })
                