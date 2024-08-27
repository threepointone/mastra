
                    import { EventHandler } from '@arkw/core';
                    import { StripeIntegration } from '..';

                    export const GetSigmaScheduledQueryRuns: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-scheduled_query_run`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {},
                })
                