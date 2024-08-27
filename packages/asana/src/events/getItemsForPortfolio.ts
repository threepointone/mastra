
                    import { EventHandler } from '@arkw/core';
                    import { AsanaIntegration } from '..';

                    export const getItemsForPortfolio: EventHandler<AsanaIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-ProjectCompact`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {},
                })
                