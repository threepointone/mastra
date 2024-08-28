
                    import { EventHandler } from '@arkw/core';
                    import { ListGiftCardsResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const ListGiftCards: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-ListGiftCardsResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { type,state,limit,cursor,customer_id,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2/gift-cards'].get({
                                query: {type,state,limit,cursor,customer_id,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ListGiftCardsResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ListGiftCardsResponse`,
                                properties: ListGiftCardsResponseFields,
                            });
                        },
                })
                