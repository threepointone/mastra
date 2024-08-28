
                    import { EventHandler } from '@arkw/core';
                    import { tag_score_objectsFields } from '../constants';
                    import { StackexchangeIntegration } from '..';

                    export const tag_score_objects: EventHandler<StackexchangeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-tag_score_objects`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { tag,period,pagesize,page,filter,callback,site, tag,period,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/tags/{tag}/top-askers/{period}'].get({
                                query: {tag,period,pagesize,page,filter,callback,site,},
                                params: {tag,period,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `tag_score_objects`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `tag_score_objects`,
                                properties: tag_score_objectsFields,
                            });
                        },
                })
                