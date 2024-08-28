
                    import { EventHandler } from '@arkw/core';
                    import { InvoicePaymentsFields } from '../constants';
                    import { HarvestIntegration } from '..';

                    export const listPaymentsForInvoice: EventHandler<HarvestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-InvoicePayments`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { invoiceId,updated_since,page,cursor,per_page, invoiceId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/invoices/{invoiceId}/payments'].get({
                                query: {invoiceId,updated_since,page,cursor,per_page,},
                                params: {invoiceId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `InvoicePayments`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `InvoicePayments`,
                                properties: InvoicePaymentsFields,
                            });
                        },
                })
                