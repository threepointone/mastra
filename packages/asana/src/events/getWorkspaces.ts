
                    import { EventHandler } from '@arkw/core';
                    import { AsanaIntegration } from '..';

                    export const getWorkspaces: EventHandler<AsanaIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-WorkspaceCompact`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {},
                })
                