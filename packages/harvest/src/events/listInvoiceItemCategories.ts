
                    import { EventHandler } from '@arkw/core';
                    import { InvoiceItemCategoriesFields } from '../constants';
                    import { HarvestIntegration } from '..';

                    export const listInvoiceItemCategories: EventHandler<HarvestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-InvoiceItemCategories`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { updated_since,page,cursor,per_page,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/invoice_item_categories'].get({
                                query: {updated_since,page,cursor,per_page,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `InvoiceItemCategories`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `InvoiceItemCategories`,
                                properties: InvoiceItemCategoriesFields,
                            });
                        },
                })
                