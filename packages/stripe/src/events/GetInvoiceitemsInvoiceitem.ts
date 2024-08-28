
                    import { EventHandler } from '@arkw/core';
                    import { invoiceitemFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetInvoiceitemsInvoiceitem: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-invoiceitem`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { expand,invoiceitem, invoiceitem,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/invoiceitems/{invoiceitem}'].get({
                                query: {expand,invoiceitem,},
                                params: {invoiceitem,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `invoiceitem`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `invoiceitem`,
                                properties: invoiceitemFields,
                            });
                        },
                })
                