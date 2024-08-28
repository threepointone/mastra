
                    import { EventHandler } from '@arkw/core';
                    import { questionsFields } from '../constants';
                    import { StackexchangeIntegration } from '..';

                    export const questions: EventHandler<StackexchangeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-questions`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { id,tags,order,max,min,sort,fromdate,todate,pagesize,page,filter,callback,site, id,tags,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/users/{id}/tags/{tags}/top-questions'].get({
                                query: {id,tags,order,max,min,sort,fromdate,todate,pagesize,page,filter,callback,site,},
                                params: {id,tags,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `questions`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `questions`,
                                properties: questionsFields,
                            });
                        },
                })
                