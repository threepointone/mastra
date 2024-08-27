
                    import { EventHandler } from '@arkw/core';
                    import { AsanaIntegration } from '..';

                    export const getAttachmentsForObject: EventHandler<AsanaIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-AttachmentCompact`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {},
                })
                