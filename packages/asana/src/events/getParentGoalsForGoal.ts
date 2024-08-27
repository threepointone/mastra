
                    import { EventHandler } from '@arkw/core';
                    import { AsanaIntegration } from '..';

                    export const getParentGoalsForGoal: EventHandler<AsanaIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-GoalCompact`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {},
                })
                