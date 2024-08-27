
                    import { EventHandler } from '@arkw/core';
                    import { StripeIntegration } from '..';

                    export const GetFinancialConnectionsAccountsAccountOwners: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-financial_connections.account_owner`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {},
                })
                