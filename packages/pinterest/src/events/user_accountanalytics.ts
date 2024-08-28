
                    import { EventHandler } from '@arkw/core';
                    import { AnalyticsResponseFields } from '../constants';
                    import { PinterestIntegration } from '..';

                    export const user_accountanalytics: EventHandler<PinterestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-AnalyticsResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { query_start_date,query_end_date,query_from_claimed_content,query_pin_format,query_app_types,query_content_type,query_source,query_metric_types,query_split_field_user_account,query_ad_account_id,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/user_account/analytics'].get({
                                query: {query_start_date,query_end_date,query_from_claimed_content,query_pin_format,query_app_types,query_content_type,query_source,query_metric_types,query_split_field_user_account,query_ad_account_id,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `AnalyticsResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `AnalyticsResponse`,
                                properties: AnalyticsResponseFields,
                            });
                        },
                })
                