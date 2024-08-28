
                    import { EventHandler } from '@arkw/core';
                    import { DeliveryMetricsResponseFields } from '../constants';
                    import { PinterestIntegration } from '..';

                    export const delivery_metrics: EventHandler<PinterestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-DeliveryMetricsResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { query_report_type,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/resources/delivery_metrics'].get({
                                query: {query_report_type,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `DeliveryMetricsResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `DeliveryMetricsResponse`,
                                properties: DeliveryMetricsResponseFields,
                            });
                        },
                })
                