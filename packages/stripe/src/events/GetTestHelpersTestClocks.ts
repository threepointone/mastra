
                    import { EventHandler } from '@arkw/core';
                    import { StripeIntegration } from '..';

                    export const GetTestHelpersTestClocks: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-test_helpers.test_clock`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {},
                })
                