
                    import { EventHandler } from '@arkw/core';
                    import { #/paths/~1v2~1functions~1namespaces~1%7Bnamespace_id%7D~1triggers/post/responses/200Fields } from '../constants';
                    import { DigitaloceanIntegration } from '..';

                    export const functions__trigger: EventHandler<DigitaloceanIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-#/paths/~1v2~1functions~1namespaces~1%7Bnamespace_id%7D~1triggers/post/responses/200`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { #/paths/~1v2~1functions~1namespaces~1%7Bnamespace_id%7D/get/parameters/0,trigger_name, namespace_id,trigger_name,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2/functions/namespaces/{namespace_id}/triggers/{trigger_name}'].get({
                                query: {#/paths/~1v2~1functions~1namespaces~1%7Bnamespace_id%7D/get/parameters/0,trigger_name,},
                                params: {namespace_id,trigger_name,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `#/paths/~1v2~1functions~1namespaces~1%7Bnamespace_id%7D~1triggers/post/responses/200`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `#/paths/~1v2~1functions~1namespaces~1%7Bnamespace_id%7D~1triggers/post/responses/200`,
                                properties: #/paths/~1v2~1functions~1namespaces~1%7Bnamespace_id%7D~1triggers/post/responses/200Fields,
                            });
                        },
                })
                