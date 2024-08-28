
                    import { EventHandler } from '@arkw/core';
                    import { MetricsResponseFields } from '../constants';
                    import { PinterestIntegration } from '..';

                    export const ad_taring_analyticsget: EventHandler<PinterestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-MetricsResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { path_ad_account_id,query_ad_ids_required,query_start_date,query_end_date,query_ad_targeting_types,query_columns,query_granularity,query_conversion_attribution_click_window_days,query_conversion_attribution_engagement_window_days,query_conversion_attribution_view_window_days,query_conversion_attribution_conversion_report_time,query_attribution_types, ad_account_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/ad_accounts/{ad_account_id}/ads/targeting_analytics'].get({
                                query: {path_ad_account_id,query_ad_ids_required,query_start_date,query_end_date,query_ad_targeting_types,query_columns,query_granularity,query_conversion_attribution_click_window_days,query_conversion_attribution_engagement_window_days,query_conversion_attribution_view_window_days,query_conversion_attribution_conversion_report_time,query_attribution_types,},
                                params: {ad_account_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `MetricsResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `MetricsResponse`,
                                properties: MetricsResponseFields,
                            });
                        },
                })
                