
                    import { EventHandler } from '@arkw/core';
                    import { #/paths/~1v2~1monitoring~1alerts/post/responses/200Fields } from '../constants';
                    import { DigitaloceanIntegration } from '..';

                    export const monitoring__alertPolicy: EventHandler<DigitaloceanIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-#/paths/~1v2~1monitoring~1alerts/post/responses/200`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { alert_uuid, alert_uuid,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2/monitoring/alerts/{alert_uuid}'].get({
                                query: {alert_uuid,},
                                params: {alert_uuid,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `#/paths/~1v2~1monitoring~1alerts/post/responses/200`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `#/paths/~1v2~1monitoring~1alerts/post/responses/200`,
                                properties: #/paths/~1v2~1monitoring~1alerts/post/responses/200Fields,
                            });
                        },
                })
                