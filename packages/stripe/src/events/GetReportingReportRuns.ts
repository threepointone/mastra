
                    import { EventHandler } from '@arkw/core';
                    import { StripeIntegration } from '..';

                    export const GetReportingReportRuns: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-reporting.report_run`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {},
                })
                