
                    import { EventHandler } from '@arkw/core';
                    import { line_itemFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetInvoicesInvoiceLines: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-line_item`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { ending_before,expand,invoice,limit,starting_after, invoice,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/invoices/{invoice}/lines'].get({
                                query: {ending_before,expand,invoice,limit,starting_after,},
                                params: {invoice,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `line_item`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `line_item`,
                                properties: line_itemFields,
                            });
                        },
                })
                