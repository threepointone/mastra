
                    import { EventHandler } from '@arkw/core';
                    import { StripeIntegration } from '..';

                    export const GetReportingReportTypes: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-reporting.report_type`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {},
                })
                