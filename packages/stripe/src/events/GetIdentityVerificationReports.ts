
                    import { EventHandler } from '@arkw/core';
                    import { StripeIntegration } from '..';

                    export const GetIdentityVerificationReports: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-identity.verification_report`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {},
                })
                