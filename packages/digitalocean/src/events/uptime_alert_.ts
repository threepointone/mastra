
                    import { EventHandler } from '@arkw/core';
                    import { #/paths/~1v2~1uptime~1checks~1%7Bcheck_id%7D~1alerts/post/responses/201Fields } from '../constants';
                    import { DigitaloceanIntegration } from '..';

                    export const uptime_alert_: EventHandler<DigitaloceanIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-#/paths/~1v2~1uptime~1checks~1%7Bcheck_id%7D~1alerts/post/responses/201`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { #/paths/~1v2~1uptime~1checks~1%7Bcheck_id%7D/get/parameters/0,alert_id,check_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2/uptime/checks/{check_id}/alerts/{alert_id}'].get({
                                query: {#/paths/~1v2~1uptime~1checks~1%7Bcheck_id%7D/get/parameters/0,alert_id,},
                                params: {check_id,alert_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `#/paths/~1v2~1uptime~1checks~1%7Bcheck_id%7D~1alerts/post/responses/201`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `#/paths/~1v2~1uptime~1checks~1%7Bcheck_id%7D~1alerts/post/responses/201`,
                                properties: #/paths/~1v2~1uptime~1checks~1%7Bcheck_id%7D~1alerts/post/responses/201Fields,
                            });
                        },
                })
                