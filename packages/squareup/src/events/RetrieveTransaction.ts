
                    import { EventHandler } from '@arkw/core';
                    import { RetrieveTransactionResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const RetrieveTransaction: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-RetrieveTransactionResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { location_id,transaction_id, location_id,transaction_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2/locations/{location_id}/transactions/{transaction_id}'].get({
                                query: {location_id,transaction_id,},
                                params: {location_id,transaction_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `RetrieveTransactionResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `RetrieveTransactionResponse`,
                                properties: RetrieveTransactionResponseFields,
                            });
                        },
                })
                