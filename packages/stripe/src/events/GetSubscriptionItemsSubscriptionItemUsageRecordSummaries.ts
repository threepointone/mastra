
                    import { EventHandler } from '@arkw/core';
                    import { usage_record_summaryFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetSubscriptionItemsSubscriptionItemUsageRecordSummaries: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-usage_record_summary`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { ending_before,expand,limit,starting_after,subscription_item, subscription_item,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v1/subscription_items/{subscription_item}/usage_record_summaries'].get({
                                query: {ending_before,expand,limit,starting_after,subscription_item,},
                                params: {subscription_item,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `usage_record_summary`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `usage_record_summary`,
                                properties: usage_record_summaryFields,
                            });
                        },
                })
                