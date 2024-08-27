
                    import { EventHandler } from '@arkw/core';
                    import { AsanaIntegration } from '..';

                    export const getAuditLogEvents: EventHandler<AsanaIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-AuditLogEvent`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {},
                })
                