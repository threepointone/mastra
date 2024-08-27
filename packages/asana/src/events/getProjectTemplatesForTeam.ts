
                    import { EventHandler } from '@arkw/core';
                    import { AsanaIntegration } from '..';

                    export const getProjectTemplatesForTeam: EventHandler<AsanaIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-ProjectTemplateCompact`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {},
                })
                