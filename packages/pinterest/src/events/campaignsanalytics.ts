
                    import { EventHandler } from '@arkw/core';
                    import { CampaignsAnalyticsResponseFields } from '../constants';
                    import { PinterestIntegration } from '..';

                    export const campaignsanalytics: EventHandler<PinterestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-CampaignsAnalyticsResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { path_ad_account_id,query_start_date,query_end_date,query_campaign_ids_required,query_columns,query_granularity,query_conversion_attribution_click_window_days,query_conversion_attribution_engagement_window_days,query_conversion_attribution_view_window_days,query_conversion_attribution_conversion_report_time, ad_account_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/ad_accounts/{ad_account_id}/campaigns/analytics'].get({
                                query: {path_ad_account_id,query_start_date,query_end_date,query_campaign_ids_required,query_columns,query_granularity,query_conversion_attribution_click_window_days,query_conversion_attribution_engagement_window_days,query_conversion_attribution_view_window_days,query_conversion_attribution_conversion_report_time,},
                                params: {ad_account_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `CampaignsAnalyticsResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `CampaignsAnalyticsResponse`,
                                properties: CampaignsAnalyticsResponseFields,
                            });
                        },
                })
                