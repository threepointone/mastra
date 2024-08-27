
                    import { EventHandler } from '@arkw/core';
                    import { StripeIntegration } from '..';

                    export const GetExchangeRates: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-exchange_rate`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {},
                })
                