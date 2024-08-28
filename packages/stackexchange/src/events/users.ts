
                    import { EventHandler } from '@arkw/core';
                    import { usersFields } from '../constants';
                    import { StackexchangeIntegration } from '..';

                    export const users: EventHandler<StackexchangeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-users`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { ids,order,max,min,sort,fromdate,todate,pagesize,page,filter,callback,site, ids,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/users/{ids}'].get({
                                query: {ids,order,max,min,sort,fromdate,todate,pagesize,page,filter,callback,site,},
                                params: {ids,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `users`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `users`,
                                properties: usersFields,
                            });
                        },
                })
                