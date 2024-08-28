
                    import { EventHandler } from '@arkw/core';
                    import { AdsAnalyticsResponseFields } from '../constants';
                    import { PinterestIntegration } from '..';

                    export const adsanalytics: EventHandler<PinterestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-AdsAnalyticsResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { path_ad_account_id,query_start_date,query_end_date,query_ad_ids,query_columns,query_granularity,query_conversion_attribution_click_window_days,query_conversion_attribution_engagement_window_days,query_conversion_attribution_view_window_days,query_conversion_attribution_conversion_report_time,pin_ids,query_campaign_ids,ad_account_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/ad_accounts/{ad_account_id}/ads/analytics'].get({
                                query: {path_ad_account_id,query_start_date,query_end_date,query_ad_ids,query_columns,query_granularity,query_conversion_attribution_click_window_days,query_conversion_attribution_engagement_window_days,query_conversion_attribution_view_window_days,query_conversion_attribution_conversion_report_time,pin_ids,query_campaign_ids,},
                                params: {ad_account_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `AdsAnalyticsResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `AdsAnalyticsResponse`,
                                properties: AdsAnalyticsResponseFields,
                            });
                        },
                })
                