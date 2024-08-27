
                    import { EventHandler } from '@arkw/core';
                    import { StripeIntegration } from '..';

                    export const GetQuotesQuoteComputedUpfrontLineItems: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-item`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {},
                })
                