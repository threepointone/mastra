
                    import { EventHandler } from '@arkw/core';
                    import { treasury.transaction_entryFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetTreasuryTransactionEntriesId: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-treasury.transaction_entry`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { expand,id, id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/treasury/transaction_entries/{id}'].get({
                                query: {expand,id,},
                                params: {id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `treasury.transaction_entry`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `treasury.transaction_entry`,
                                properties: treasury.transaction_entryFields,
                            });
                        },
                })
                