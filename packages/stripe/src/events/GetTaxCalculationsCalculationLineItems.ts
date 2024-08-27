
                    import { EventHandler } from '@arkw/core';
                    import { tax.calculation_line_itemFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetTaxCalculationsCalculationLineItems: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-tax.calculation_line_item`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })
                            const response = await proxy['/v1/tax/calculations/{calculation}/line_items'].get()

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `tax.calculation_line_item`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `tax.calculation_line_item`,
                                properties: tax.calculation_line_itemFields,
                            });
                        },
                })
                