
                    import { EventHandler } from '@arkw/core';
                    import { ListCardsResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const ListCards: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-ListCardsResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { cursor,customer_id,include_disabled,reference_id,sort_order,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2/cards'].get({
                                query: {cursor,customer_id,include_disabled,reference_id,sort_order,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ListCardsResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ListCardsResponse`,
                                properties: ListCardsResponseFields,
                            });
                        },
                })
                