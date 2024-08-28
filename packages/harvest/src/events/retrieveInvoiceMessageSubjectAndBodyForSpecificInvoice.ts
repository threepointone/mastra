
                    import { EventHandler } from '@arkw/core';
                    import { InvoiceMessageSubjectAndBodyFields } from '../constants';
                    import { HarvestIntegration } from '..';

                    export const retrieveInvoiceMessageSubjectAndBodyForSpecificInvoice: EventHandler<HarvestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-InvoiceMessageSubjectAndBody`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { invoiceId,thank_you,reminder, invoiceId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/invoices/{invoiceId}/messages/new'].get({
                                query: {invoiceId,thank_you,reminder,},
                                params: {invoiceId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `InvoiceMessageSubjectAndBody`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `InvoiceMessageSubjectAndBody`,
                                properties: InvoiceMessageSubjectAndBodyFields,
                            });
                        },
                })
                