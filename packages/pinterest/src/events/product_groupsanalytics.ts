
                    import { EventHandler } from '@arkw/core';
                    import { ProductGroupAnalyticsResponseFields } from '../constants';
                    import { PinterestIntegration } from '..';

                    export const product_groupsanalytics: EventHandler<PinterestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-ProductGroupAnalyticsResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { path_ad_account_id,query_start_date,query_end_date,query_product_group_ids_required,query_columns,query_granularity,query_conversion_attribution_click_window_days,query_conversion_attribution_engagement_window_days,query_conversion_attribution_view_window_days,query_conversion_attribution_conversion_report_time, ad_account_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/ad_accounts/{ad_account_id}/product_groups/analytics'].get({
                                query: {path_ad_account_id,query_start_date,query_end_date,query_product_group_ids_required,query_columns,query_granularity,query_conversion_attribution_click_window_days,query_conversion_attribution_engagement_window_days,query_conversion_attribution_view_window_days,query_conversion_attribution_conversion_report_time,},
                                params: {ad_account_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ProductGroupAnalyticsResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ProductGroupAnalyticsResponse`,
                                properties: ProductGroupAnalyticsResponseFields,
                            });
                        },
                })
                