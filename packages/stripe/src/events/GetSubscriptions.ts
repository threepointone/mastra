
                    import { EventHandler } from '@arkw/core';
                    import { subscriptionFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetSubscriptions: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-subscription`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { collection_method,created,current_period_end,current_period_start,customer,ending_before,expand,limit,price,starting_after,status,test_clock,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v1/subscriptions'].get({
                                query: {collection_method,created,current_period_end,current_period_start,customer,ending_before,expand,limit,price,starting_after,status,test_clock,},
                                 })

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
                