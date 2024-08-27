
                    import { EventHandler } from '@arkw/core';
                    import { StripeIntegration } from '..';

                    export const GetRadarEarlyFraudWarnings: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-radar.early_fraud_warning`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {},
                })
                