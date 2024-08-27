
                    import { EventHandler } from '@arkw/core';
                    import { StripeIntegration } from '..';

                    export const GetIssuingDisputes: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-issuing.dispute`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {},
                })
                