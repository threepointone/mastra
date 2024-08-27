
                    import { EventHandler } from '@arkw/core';
                    import { AsanaIntegration } from '..';

                    export const getWorkspaceMembershipsForWorkspace: EventHandler<AsanaIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-WorkspaceMembershipCompact`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {},
                })
                