
                    import { EventHandler } from '@arkw/core';
                    import { #/paths/~1v2~1apps/post/responses/200/content/application~1json/schemaFields } from '../constants';
                    import { DigitaloceanIntegration } from '..';

                    export const apps_: EventHandler<DigitaloceanIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-#/paths/~1v2~1apps/post/responses/200/content/application~1json/schema`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { #/paths/~1v2~1apps~1%7Bid%7D/delete/parameters/0,name,id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2/apps/{id}'].get({
                                query: {#/paths/~1v2~1apps~1%7Bid%7D/delete/parameters/0,name,},
                                params: {id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `#/paths/~1v2~1apps/post/responses/200/content/application~1json/schema`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `#/paths/~1v2~1apps/post/responses/200/content/application~1json/schema`,
                                properties: #/paths/~1v2~1apps/post/responses/200/content/application~1json/schemaFields,
                            });
                        },
                })
                