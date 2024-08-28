
                    import { EventHandler } from '@arkw/core';
                    import { #/paths/~1v2~1apps~1%7Bapp_id%7D~1components~1%7Bcomponent_name%7D~1logs/get/responses/200Fields } from '../constants';
                    import { DigitaloceanIntegration } from '..';

                    export const apps__logs_aggregate: EventHandler<DigitaloceanIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-#/paths/~1v2~1apps~1%7Bapp_id%7D~1components~1%7Bcomponent_name%7D~1logs/get/responses/200`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { #/paths/~1v2~1apps~1%7Bapp_id%7D~1components~1%7Bcomponent_name%7D~1logs/get/parameters/0,#/paths/~1v2~1apps~1%7Bapp_id%7D~1deployments~1%7Bdeployment_id%7D/get/parameters/1,#/paths/~1v2~1apps~1%7Bapp_id%7D~1components~1%7Bcomponent_name%7D~1logs/get/parameters/2,#/paths/~1v2~1apps~1%7Bapp_id%7D~1components~1%7Bcomponent_name%7D~1logs/get/parameters/3,#/paths/~1v2~1apps~1%7Bapp_id%7D~1components~1%7Bcomponent_name%7D~1logs/get/parameters/4, app_id,deployment_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2/apps/{app_id}/deployments/{deployment_id}/logs'].get({
                                query: {#/paths/~1v2~1apps~1%7Bapp_id%7D~1components~1%7Bcomponent_name%7D~1logs/get/parameters/0,#/paths/~1v2~1apps~1%7Bapp_id%7D~1deployments~1%7Bdeployment_id%7D/get/parameters/1,#/paths/~1v2~1apps~1%7Bapp_id%7D~1components~1%7Bcomponent_name%7D~1logs/get/parameters/2,#/paths/~1v2~1apps~1%7Bapp_id%7D~1components~1%7Bcomponent_name%7D~1logs/get/parameters/3,#/paths/~1v2~1apps~1%7Bapp_id%7D~1components~1%7Bcomponent_name%7D~1logs/get/parameters/4,},
                                params: {app_id,deployment_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `#/paths/~1v2~1apps~1%7Bapp_id%7D~1components~1%7Bcomponent_name%7D~1logs/get/responses/200`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `#/paths/~1v2~1apps~1%7Bapp_id%7D~1components~1%7Bcomponent_name%7D~1logs/get/responses/200`,
                                properties: #/paths/~1v2~1apps~1%7Bapp_id%7D~1components~1%7Bcomponent_name%7D~1logs/get/responses/200Fields,
                            });
                        },
                })
                