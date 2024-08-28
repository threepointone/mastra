
                    import { EventHandler } from '@arkw/core';
                    import { #/paths/~1v2~1monitoring~1metrics~1droplet~1bandwidth/get/responses/200/content/application~1json/schemaFields } from '../constants';
                    import { DigitaloceanIntegration } from '..';

                    export const monitoring__dropletLoad1Metrics: EventHandler<DigitaloceanIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-#/paths/~1v2~1monitoring~1metrics~1droplet~1bandwidth/get/responses/200/content/application~1json/schema`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { #/paths/~1v2~1monitoring~1metrics~1droplet~1bandwidth/get/parameters/0,#/paths/~1v2~1monitoring~1metrics~1droplet~1bandwidth/get/parameters/3,#/paths/~1v2~1monitoring~1metrics~1droplet~1bandwidth/get/parameters/4,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2/monitoring/metrics/droplet/load_1'].get({
                                query: {#/paths/~1v2~1monitoring~1metrics~1droplet~1bandwidth/get/parameters/0,#/paths/~1v2~1monitoring~1metrics~1droplet~1bandwidth/get/parameters/3,#/paths/~1v2~1monitoring~1metrics~1droplet~1bandwidth/get/parameters/4,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `#/paths/~1v2~1monitoring~1metrics~1droplet~1bandwidth/get/responses/200/content/application~1json/schema`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `#/paths/~1v2~1monitoring~1metrics~1droplet~1bandwidth/get/responses/200/content/application~1json/schema`,
                                properties: #/paths/~1v2~1monitoring~1metrics~1droplet~1bandwidth/get/responses/200/content/application~1json/schemaFields,
                            });
                        },
                })
                