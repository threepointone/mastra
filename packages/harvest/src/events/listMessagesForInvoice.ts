
                    import { EventHandler } from '@arkw/core';
                    import { InvoiceMessagesFields } from '../constants';
                    import { HarvestIntegration } from '..';

                    export const listMessagesForInvoice: EventHandler<HarvestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-InvoiceMessages`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { invoiceId,updated_since,page,cursor,per_page, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/invoices/{invoiceId}/messages'].get({
                                query: {invoiceId,updated_since,page,cursor,per_page,},
                                params: {invoiceId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `InvoiceMessages`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `InvoiceMessages`,
                                properties: InvoiceMessagesFields,
                            });
                        },
                })
                