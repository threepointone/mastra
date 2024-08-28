
                    import { EventHandler } from '@arkw/core';
                    import { #/paths/~1v2~1cdn~1endpoints/post/responses/201Fields } from '../constants';
                    import { DigitaloceanIntegration } from '..';

                    export const cdn__endpoint: EventHandler<DigitaloceanIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-#/paths/~1v2~1cdn~1endpoints/post/responses/201`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { cdn_id, cdn_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2/cdn/endpoints/{cdn_id}'].get({
                                query: {cdn_id,},
                                params: {cdn_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `#/paths/~1v2~1cdn~1endpoints/post/responses/201`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `#/paths/~1v2~1cdn~1endpoints/post/responses/201`,
                                properties: #/paths/~1v2~1cdn~1endpoints/post/responses/201Fields,
                            });
                        },
                })
                