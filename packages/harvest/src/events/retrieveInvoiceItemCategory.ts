
                    import { EventHandler } from '@arkw/core';
                    import { InvoiceItemCategoryFields } from '../constants';
                    import { HarvestIntegration } from '..';

                    export const retrieveInvoiceItemCategory: EventHandler<HarvestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-InvoiceItemCategory`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { invoiceItemCategoryId, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/invoice_item_categories/{invoiceItemCategoryId}'].get({
                                query: {invoiceItemCategoryId,},
                                params: {invoiceItemCategoryId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `InvoiceItemCategory`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `InvoiceItemCategory`,
                                properties: InvoiceItemCategoryFields,
                            });
                        },
                })
                