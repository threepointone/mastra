
                    import { EventHandler } from '@arkw/core';
                    import { eventsFields } from '../constants';
                    import { StackexchangeIntegration } from '..';

                    export const events: EventHandler<StackexchangeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-events`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { pagesize,page,filter,callback,site,since,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/events'].get({
                                query: {pagesize,page,filter,callback,site,since,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `events`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `events`,
                                properties: eventsFields,
                            });
                        },
                })
                