
                    import { EventHandler } from '@arkw/core';
                    import { AsanaIntegration } from '..';

                    export const getProjectStatusesForProject: EventHandler<AsanaIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-ProjectStatusCompact`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {},
                })
                