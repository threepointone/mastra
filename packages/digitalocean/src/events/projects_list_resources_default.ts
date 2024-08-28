
                    import { EventHandler } from '@arkw/core';
                    import { #/paths/~1v2~1projects~1%7Bproject_id%7D~1resources/get/responses/200Fields } from '../constants';
                    import { DigitaloceanIntegration } from '..';

                    export const projects_list_resources_default: EventHandler<DigitaloceanIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-#/paths/~1v2~1projects~1%7Bproject_id%7D~1resources/get/responses/200`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {    } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2/projects/default/resources'].get({
                                
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `#/paths/~1v2~1projects~1%7Bproject_id%7D~1resources/get/responses/200`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `#/paths/~1v2~1projects~1%7Bproject_id%7D~1resources/get/responses/200`,
                                properties: #/paths/~1v2~1projects~1%7Bproject_id%7D~1resources/get/responses/200Fields,
                            });
                        },
                })
                