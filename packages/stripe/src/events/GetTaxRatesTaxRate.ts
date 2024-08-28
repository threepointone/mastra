
                    import { EventHandler } from '@arkw/core';
                    import { tax_rateFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetTaxRatesTaxRate: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-tax_rate`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { expand,tax_rate, tax_rate,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v1/tax_rates/{tax_rate}'].get({
                                query: {expand,tax_rate,},
                                params: {tax_rate,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `tax_rate`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `tax_rate`,
                                properties: tax_rateFields,
                            });
                        },
                })
                