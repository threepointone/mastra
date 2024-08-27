
                    import { EventHandler } from '@arkw/core';
                    import { AsanaIntegration } from '..';

                    export const getDependentsForTask: EventHandler<AsanaIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-TaskCompact`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {},
                })
                