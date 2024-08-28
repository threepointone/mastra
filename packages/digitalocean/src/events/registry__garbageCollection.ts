
                    import { EventHandler } from '@arkw/core';
                    import { #/paths/~1v2~1registry~1%7Bregistry_name%7D~1garbage-collection/post/responses/201Fields } from '../constants';
                    import { DigitaloceanIntegration } from '..';

                    export const registry__garbageCollection: EventHandler<DigitaloceanIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-#/paths/~1v2~1registry~1%7Bregistry_name%7D~1garbage-collection/post/responses/201`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { #/paths/~1v2~1registry~1%7Bregistry_name%7D~1repositories/get/parameters/2, registry_name,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2/registry/{registry_name}/garbage-collection'].get({
                                query: {#/paths/~1v2~1registry~1%7Bregistry_name%7D~1repositories/get/parameters/2,},
                                params: {registry_name,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `#/paths/~1v2~1registry~1%7Bregistry_name%7D~1garbage-collection/post/responses/201`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `#/paths/~1v2~1registry~1%7Bregistry_name%7D~1garbage-collection/post/responses/201`,
                                properties: #/paths/~1v2~1registry~1%7Bregistry_name%7D~1garbage-collection/post/responses/201Fields,
                            });
                        },
                })
                