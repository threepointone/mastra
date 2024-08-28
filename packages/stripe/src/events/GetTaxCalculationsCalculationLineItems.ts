
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
                            const { calculation,ending_before,expand,limit,starting_after, calculation,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/tax/calculations/{calculation}/line_items'].get({
                                query: {calculation,ending_before,expand,limit,starting_after,},
                                params: {calculation,} })

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
                