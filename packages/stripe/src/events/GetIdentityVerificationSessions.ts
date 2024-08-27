
                    import { EventHandler } from '@arkw/core';
                    import { StripeIntegration } from '..';

                    export const GetIdentityVerificationSessions: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-identity.verification_session`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {},
                })
                