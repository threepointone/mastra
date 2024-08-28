
                    import { EventHandler } from '@arkw/core';
                    import { #/paths/~1v2~1reserved_ips~1%7Breserved_ip%7D~1actions/post/responses/201Fields } from '../constants';
                    import { DigitaloceanIntegration } from '..';

                    export const reservedIPsActions_: EventHandler<DigitaloceanIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-#/paths/~1v2~1reserved_ips~1%7Breserved_ip%7D~1actions/post/responses/201`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { #/paths/~1v2~1reserved_ips~1%7Breserved_ip%7D/get/parameters/0,#/paths/~1v2~1actions~1%7Baction_id%7D/get/parameters/0, reserved_ip,action_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2/reserved_ips/{reserved_ip}/actions/{action_id}'].get({
                                query: {#/paths/~1v2~1reserved_ips~1%7Breserved_ip%7D/get/parameters/0,#/paths/~1v2~1actions~1%7Baction_id%7D/get/parameters/0,},
                                params: {reserved_ip,action_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `#/paths/~1v2~1reserved_ips~1%7Breserved_ip%7D~1actions/post/responses/201`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `#/paths/~1v2~1reserved_ips~1%7Breserved_ip%7D~1actions/post/responses/201`,
                                properties: #/paths/~1v2~1reserved_ips~1%7Breserved_ip%7D~1actions/post/responses/201Fields,
                            });
                        },
                })
                