
                    import { EventHandler } from '@arkw/core';
                    import { badgesFields } from '../constants';
                    import { StackexchangeIntegration } from '..';

                    export const badges: EventHandler<StackexchangeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-badges`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { ids,order,max,min,sort,fromdate,todate,pagesize,page,filter,callback,site, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/users/{ids}/badges'].get({
                                query: {ids,order,max,min,sort,fromdate,todate,pagesize,page,filter,callback,site,},
                                params: {ids,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `badges`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `badges`,
                                properties: badgesFields,
                            });
                        },
                })
                