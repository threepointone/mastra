
                    import { EventHandler } from '@arkw/core';
                    import { GetInvoiceResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const GetInvoice: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-GetInvoiceResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { invoice_id, invoice_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2/invoices/{invoice_id}'].get({
                                query: {invoice_id,},
                                params: {invoice_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `GetInvoiceResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `GetInvoiceResponse`,
                                properties: GetInvoiceResponseFields,
                            });
                        },
                })
                