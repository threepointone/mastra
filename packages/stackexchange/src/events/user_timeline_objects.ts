
                    import { EventHandler } from '@arkw/core';
                    import { user_timeline_objectsFields } from '../constants';
                    import { StackexchangeIntegration } from '..';

                    export const user_timeline_objects: EventHandler<StackexchangeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-user_timeline_objects`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { ids,fromdate,todate,pagesize,page,filter,callback,site, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/users/{ids}/timeline'].get({
                                query: {ids,fromdate,todate,pagesize,page,filter,callback,site,},
                                params: {ids,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `user_timeline_objects`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `user_timeline_objects`,
                                properties: user_timeline_objectsFields,
                            });
                        },
                })
                