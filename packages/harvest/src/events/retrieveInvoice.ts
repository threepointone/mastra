
                    import { EventHandler } from '@arkw/core';
                    import { InvoiceFields } from '../constants';
                    import { HarvestIntegration } from '..';

                    export const retrieveInvoice: EventHandler<HarvestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-Invoice`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { invoiceId, invoiceId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/invoices/{invoiceId}'].get({
                                query: {invoiceId,},
                                params: {invoiceId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Invoice`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Invoice`,
                                properties: InvoiceFields,
                            });
                        },
                })
                