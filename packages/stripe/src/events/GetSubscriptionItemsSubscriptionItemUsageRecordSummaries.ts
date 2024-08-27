
                    import { EventHandler } from '@arkw/core';
                    import { StripeIntegration } from '..';

                    export const GetSubscriptionItemsSubscriptionItemUsageRecordSummaries: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-usage_record_summary`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {},
                })
                