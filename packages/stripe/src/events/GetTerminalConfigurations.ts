
                    import { EventHandler } from '@arkw/core';
                    import { StripeIntegration } from '..';

                    export const GetTerminalConfigurations: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-terminal.configuration`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {},
                })
                