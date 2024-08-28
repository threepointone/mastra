
                    import { EventHandler } from '@arkw/core';
                    import { #/paths/~1v2~1volumes~1actions/post/responses/202Fields } from '../constants';
                    import { DigitaloceanIntegration } from '..';

                    export const volumeActions_: EventHandler<DigitaloceanIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-#/paths/~1v2~1volumes~1actions/post/responses/202`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { #/paths/~1v2~1volumes~1%7Bvolume_id%7D/get/parameters/0,#/paths/~1v2~1actions~1%7Baction_id%7D/get/parameters/0,#/paths/~1v2~1account~1keys/get/parameters/0,#/paths/~1v2~1account~1keys/get/parameters/1,volume_id,action_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2/volumes/{volume_id}/actions/{action_id}'].get({
                                query: {#/paths/~1v2~1volumes~1%7Bvolume_id%7D/get/parameters/0,#/paths/~1v2~1actions~1%7Baction_id%7D/get/parameters/0,#/paths/~1v2~1account~1keys/get/parameters/0,#/paths/~1v2~1account~1keys/get/parameters/1,},
                                params: {volume_id,action_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `#/paths/~1v2~1volumes~1actions/post/responses/202`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `#/paths/~1v2~1volumes~1actions/post/responses/202`,
                                properties: #/paths/~1v2~1volumes~1actions/post/responses/202Fields,
                            });
                        },
                })
                