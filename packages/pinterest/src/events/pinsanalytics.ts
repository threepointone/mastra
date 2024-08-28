
                    import { EventHandler } from '@arkw/core';
                    import { PinAnalyticsResponseFields } from '../constants';
                    import { PinterestIntegration } from '..';

                    export const pinsanalytics: EventHandler<PinterestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-PinAnalyticsResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { path_pin_id,query_start_date,query_end_date,query_app_types,query_pin_analytics_metric_types,query_split_field_pins,query_ad_account_id, pin_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/pins/{pin_id}/analytics'].get({
                                query: {path_pin_id,query_start_date,query_end_date,query_app_types,query_pin_analytics_metric_types,query_split_field_pins,query_ad_account_id,},
                                params: {pin_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PinAnalyticsResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PinAnalyticsResponse`,
                                properties: PinAnalyticsResponseFields,
                            });
                        },
                })
                