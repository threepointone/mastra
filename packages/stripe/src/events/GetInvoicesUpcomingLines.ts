
                    import { EventHandler } from '@arkw/core';
                    import { StripeIntegration } from '..';

                    export const GetInvoicesUpcomingLines: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-line_item`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {},
                })
                