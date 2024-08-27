
                    import { EventHandler } from '@arkw/core';
                    import { AsanaIntegration } from '..';

                    export const getGoals: EventHandler<AsanaIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-GoalCompact`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {},
                })
                