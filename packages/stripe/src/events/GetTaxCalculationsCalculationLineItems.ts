
                    import { EventHandler } from '@arkw/core';
                    import { StripeIntegration } from '..';

                    export const GetTaxCalculationsCalculationLineItems: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-tax.calculation_line_item`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {},
                })
                