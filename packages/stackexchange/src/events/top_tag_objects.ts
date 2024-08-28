
                    import { EventHandler } from '@arkw/core';
                    import { top_tag_objectsFields } from '../constants';
                    import { StackexchangeIntegration } from '..';

                    export const top_tag_objects: EventHandler<StackexchangeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-top_tag_objects`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { id,pagesize,page,filter,callback,site, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/users/{id}/top-question-tags'].get({
                                query: {id,pagesize,page,filter,callback,site,},
                                params: {id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `top_tag_objects`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `top_tag_objects`,
                                properties: top_tag_objectsFields,
                            });
                        },
                })
                