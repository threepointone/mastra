
                    import { EventHandler } from '@arkw/core';
                    import { AsanaIntegration } from '..';

                    export const typeaheadForWorkspace: EventHandler<AsanaIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-AsanaNamedResource`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {},
                })
                