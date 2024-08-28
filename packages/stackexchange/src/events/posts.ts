
                    import { EventHandler } from '@arkw/core';
                    import { postsFields } from '../constants';
                    import { StackexchangeIntegration } from '..';

                    export const posts: EventHandler<StackexchangeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-posts`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { ids,order,max,min,sort,fromdate,todate,pagesize,page,filter,callback,site, ids,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/posts/{ids}'].get({
                                query: {ids,order,max,min,sort,fromdate,todate,pagesize,page,filter,callback,site,},
                                params: {ids,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `posts`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `posts`,
                                properties: postsFields,
                            });
                        },
                })
                