
                    import { EventHandler } from '@arkw/core';
                    import { StripeIntegration } from '..';

                    export const GetIssuingTransactions: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-issuing.transaction`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {},
                })
                