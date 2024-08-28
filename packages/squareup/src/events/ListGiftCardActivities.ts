
                    import { EventHandler } from '@arkw/core';
                    import { ListGiftCardActivitiesResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const ListGiftCardActivities: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-ListGiftCardActivitiesResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { gift_card_id,type,location_id,begin_time,end_time,limit,cursor,sort_order,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2/gift-cards/activities'].get({
                                query: {gift_card_id,type,location_id,begin_time,end_time,limit,cursor,sort_order,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ListGiftCardActivitiesResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ListGiftCardActivitiesResponse`,
                                properties: ListGiftCardActivitiesResponseFields,
                            });
                        },
                })
                