
                    import { EventHandler } from '@arkw/core';
                    import { AdAccountGetSubscriptionResponseFields } from '../constants';
                    import { PinterestIntegration } from '..';

                    export const ad_accounts_subscriptions_by_id: EventHandler<PinterestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-AdAccountGetSubscriptionResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { path_ad_account_id,path_subscription_id, ad_account_id,subscription_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/ad_accounts/{ad_account_id}/leads/subscriptions/{subscription_id}'].get({
                                query: {path_ad_account_id,path_subscription_id,},
                                params: {ad_account_id,subscription_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `AdAccountGetSubscriptionResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `AdAccountGetSubscriptionResponse`,
                                properties: AdAccountGetSubscriptionResponseFields,
                            });
                        },
                })
                