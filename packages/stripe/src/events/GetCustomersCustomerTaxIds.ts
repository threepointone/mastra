
                    import { EventHandler } from '@arkw/core';
                    import { StripeIntegration } from '..';

                    export const GetCustomersCustomerTaxIds: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-tax_id`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {},
                })
                