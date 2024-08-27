
                    import { EventHandler } from '@arkw/core';
                    import { AsanaIntegration } from '..';

                    export const getStatusesForObject: EventHandler<AsanaIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-StatusUpdateCompact`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {},
                })
                