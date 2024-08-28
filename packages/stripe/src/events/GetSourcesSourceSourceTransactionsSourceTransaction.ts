
                    import { EventHandler } from '@arkw/core';
                    import { source_transactionFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetSourcesSourceSourceTransactionsSourceTransaction: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-source_transaction`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { expand,source,source_transaction, source,source_transaction,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v1/sources/{source}/source_transactions/{source_transaction}'].get({
                                query: {expand,source,source_transaction,},
                                params: {source,source_transaction,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `source_transaction`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `source_transaction`,
                                properties: source_transactionFields,
                            });
                        },
                })
                