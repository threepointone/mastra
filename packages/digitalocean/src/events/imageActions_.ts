
                    import { EventHandler } from '@arkw/core';
                    import { #/paths/~1v2~1actions/get/responses/200/content/application~1json/schema/allOf/0/properties/actions/itemsFields } from '../constants';
                    import { DigitaloceanIntegration } from '..';

                    export const imageActions_: EventHandler<DigitaloceanIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-#/paths/~1v2~1actions/get/responses/200/content/application~1json/schema/allOf/0/properties/actions/items`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { #/paths/~1v2~1images~1%7Bimage_id%7D/put/parameters/0,#/paths/~1v2~1actions~1%7Baction_id%7D/get/parameters/0,image_id,action_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2/images/{image_id}/actions/{action_id}'].get({
                                query: {#/paths/~1v2~1images~1%7Bimage_id%7D/put/parameters/0,#/paths/~1v2~1actions~1%7Baction_id%7D/get/parameters/0,},
                                params: {image_id,action_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `#/paths/~1v2~1actions/get/responses/200/content/application~1json/schema/allOf/0/properties/actions/items`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `#/paths/~1v2~1actions/get/responses/200/content/application~1json/schema/allOf/0/properties/actions/items`,
                                properties: #/paths/~1v2~1actions/get/responses/200/content/application~1json/schema/allOf/0/properties/actions/itemsFields,
                            });
                        },
                })
                