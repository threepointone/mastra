
                    import { EventHandler } from '@arkw/core';
                    import { source_transactionFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetSourcesSourceSourceTransactions: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-source_transaction`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { ending_before,expand,limit,source,starting_after, source,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/sources/{source}/source_transactions'].get({
                                query: {ending_before,expand,limit,source,starting_after,},
                                params: {source,} })

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
                