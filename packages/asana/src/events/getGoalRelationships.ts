
                    import { EventHandler } from '@arkw/core';
                    import { AsanaIntegration } from '..';

                    export const getGoalRelationships: EventHandler<AsanaIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-GoalRelationshipCompact`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {},
                })
                