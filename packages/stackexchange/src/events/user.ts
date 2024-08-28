
                    import { EventHandler } from '@arkw/core';
                    import { userFields } from '../constants';
                    import { StackexchangeIntegration } from '..';

                    export const user: EventHandler<StackexchangeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-user`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { order,max,min,sort,fromdate,todate,pagesize,page,filter,callback,site,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/me'].get({
                                query: {order,max,min,sort,fromdate,todate,pagesize,page,filter,callback,site,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `user`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `user`,
                                properties: userFields,
                            });
                        },
                })
                