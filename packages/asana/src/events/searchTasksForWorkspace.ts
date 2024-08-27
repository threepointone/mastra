
                    import { EventHandler } from '@arkw/core';
                    import { AsanaIntegration } from '..';

                    export const searchTasksForWorkspace: EventHandler<AsanaIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-TaskCompact`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {},
                })
                