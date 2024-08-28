
                    import { EventHandler } from '@arkw/core';
                    import { subscriptionFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetSubscriptionsSubscriptionExposedId: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-subscription`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { expand,subscription_exposed_id, subscription_exposed_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v1/subscriptions/{subscription_exposed_id}'].get({
                                query: {expand,subscription_exposed_id,},
                                params: {subscription_exposed_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `subscription`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `subscription`,
                                properties: subscriptionFields,
                            });
                        },
                })
                