
                    import { EventHandler } from '@arkw/core';
                    import { ListSubscriptionEventsResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const ListSubscriptionEvents: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-ListSubscriptionEventsResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { subscription_id,cursor,limit, subscription_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2/subscriptions/{subscription_id}/events'].get({
                                query: {subscription_id,cursor,limit,},
                                params: {subscription_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ListSubscriptionEventsResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ListSubscriptionEventsResponse`,
                                properties: ListSubscriptionEventsResponseFields,
                            });
                        },
                })
                