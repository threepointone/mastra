
                    import { EventHandler } from '@arkw/core';
                    import { suggested-editsFields } from '../constants';
                    import { StackexchangeIntegration } from '..';

                    export const suggested-edits: EventHandler<StackexchangeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-suggested-edits`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { ids,order,max,min,sort,fromdate,todate,pagesize,page,filter,callback,site, ids,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/users/{ids}/suggested-edits'].get({
                                query: {ids,order,max,min,sort,fromdate,todate,pagesize,page,filter,callback,site,},
                                params: {ids,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `suggested-edits`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `suggested-edits`,
                                properties: suggested-editsFields,
                            });
                        },
                })
                