
                    import { EventHandler } from '@arkw/core';
                    import { reputation_historyFields } from '../constants';
                    import { StackexchangeIntegration } from '..';

                    export const reputation_history: EventHandler<StackexchangeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-reputation_history`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { id,pagesize,page,filter,callback,site, id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/users/{id}/reputation-history/full'].get({
                                query: {id,pagesize,page,filter,callback,site,},
                                params: {id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `reputation_history`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `reputation_history`,
                                properties: reputation_historyFields,
                            });
                        },
                })
                