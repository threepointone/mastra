
                    import { EventHandler } from '@arkw/core';
                    import { StripeIntegration } from '..';

                    export const GetTreasuryInboundTransfers: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-treasury.inbound_transfer`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {},
                })
                