
                    import { EventHandler } from '@arkw/core';
                    import { BulkPinAnalyticsResponseFields } from '../constants';
                    import { PinterestIntegration } from '..';

                    export const multi_pinsanalytics: EventHandler<PinterestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-BulkPinAnalyticsResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { query_required_pin_ids,query_start_date,query_end_date,query_app_types,metric_types,query_ad_account_id,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/pins/analytics'].get({
                                query: {query_required_pin_ids,query_start_date,query_end_date,query_app_types,metric_types,query_ad_account_id,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `BulkPinAnalyticsResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `BulkPinAnalyticsResponse`,
                                properties: BulkPinAnalyticsResponseFields,
                            });
                        },
                })
                