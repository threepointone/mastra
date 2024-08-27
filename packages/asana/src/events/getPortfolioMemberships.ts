
                    import { EventHandler } from '@arkw/core';
                    import { AsanaIntegration } from '..';

                    export const getPortfolioMemberships: EventHandler<AsanaIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-PortfolioMembershipCompact`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {},
                })
                