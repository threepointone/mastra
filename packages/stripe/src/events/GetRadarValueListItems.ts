
                    import { EventHandler } from '@arkw/core';
                    import { StripeIntegration } from '..';

                    export const GetRadarValueListItems: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-radar.value_list_item`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {},
                })
                