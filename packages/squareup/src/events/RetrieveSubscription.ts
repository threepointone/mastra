
                    import { EventHandler } from '@arkw/core';
                    import { RetrieveSubscriptionResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const RetrieveSubscription: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-RetrieveSubscriptionResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { subscription_id, subscription_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2/subscriptions/{subscription_id}'].get({
                                query: {subscription_id,},
                                params: {subscription_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `RetrieveSubscriptionResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `RetrieveSubscriptionResponse`,
                                properties: RetrieveSubscriptionResponseFields,
                            });
                        },
                })
                