
                    import { EventHandler } from '@arkw/core';
                    import { RetrieveCardResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const RetrieveCard: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-RetrieveCardResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { card_id, card_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2/cards/{card_id}'].get({
                                query: {card_id,},
                                params: {card_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `RetrieveCardResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `RetrieveCardResponse`,
                                properties: RetrieveCardResponseFields,
                            });
                        },
                })
                