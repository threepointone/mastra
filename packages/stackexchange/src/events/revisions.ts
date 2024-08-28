
                    import { EventHandler } from '@arkw/core';
                    import { revisionsFields } from '../constants';
                    import { StackexchangeIntegration } from '..';

                    export const revisions: EventHandler<StackexchangeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-revisions`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { ids,fromdate,todate,pagesize,page,filter,callback,site, ids,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/revisions/{ids}'].get({
                                query: {ids,fromdate,todate,pagesize,page,filter,callback,site,},
                                params: {ids,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `revisions`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `revisions`,
                                properties: revisionsFields,
                            });
                        },
                })
                