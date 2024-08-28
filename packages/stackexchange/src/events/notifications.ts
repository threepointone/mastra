
                    import { EventHandler } from '@arkw/core';
                    import { notificationsFields } from '../constants';
                    import { StackexchangeIntegration } from '..';

                    export const notifications: EventHandler<StackexchangeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-notifications`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { id,pagesize,page,filter,callback,site, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/users/{id}/notifications/unread'].get({
                                query: {id,pagesize,page,filter,callback,site,},
                                params: {id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `notifications`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `notifications`,
                                properties: notificationsFields,
                            });
                        },
                })
                