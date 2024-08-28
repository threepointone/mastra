
                    import { EventHandler } from '@arkw/core';
                    import { subscription_itemFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetSubscriptionItemsItem: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-subscription_item`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { expand,item, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/subscription_items/{item}'].get({
                                query: {expand,item,},
                                params: {item,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `subscription_item`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `subscription_item`,
                                properties: subscription_itemFields,
                            });
                        },
                })
                