
                    import { EventHandler } from '@arkw/core';
                    import { AsanaIntegration } from '..';

                    export const getCustomFieldSettingsForPortfolio: EventHandler<AsanaIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-CustomFieldSettingResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {},
                })
                