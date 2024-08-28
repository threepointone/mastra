
                    import { EventHandler } from '@arkw/core';
                    import { inbox_itemsFields } from '../constants';
                    import { StackexchangeIntegration } from '..';

                    export const inbox_items: EventHandler<StackexchangeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-inbox_items`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { id,pagesize,page,filter,callback,site,since, id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/users/{id}/inbox/unread'].get({
                                query: {id,pagesize,page,filter,callback,site,since,},
                                params: {id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `inbox_items`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `inbox_items`,
                                properties: inbox_itemsFields,
                            });
                        },
                })
                