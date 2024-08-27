
                    import { EventHandler } from '@arkw/core';
                    import { AsanaIntegration } from '..';

                    export const getProjectMembershipsForProject: EventHandler<AsanaIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-ProjectMembershipCompact`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {},
                })
                