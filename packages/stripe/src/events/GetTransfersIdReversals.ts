
                    import { EventHandler } from '@arkw/core';
                    import { StripeIntegration } from '..';

                    export const GetTransfersIdReversals: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-transfer_reversal`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {},
                })
                