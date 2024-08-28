
                    import { EventHandler } from '@arkw/core';
                    import { network_usersFields } from '../constants';
                    import { StackexchangeIntegration } from '..';

                    export const network_users: EventHandler<StackexchangeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-network_users`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { ids,pagesize,page,filter,callback, ids,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/users/{ids}/associated'].get({
                                query: {ids,pagesize,page,filter,callback,},
                                params: {ids,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `network_users`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `network_users`,
                                properties: network_usersFields,
                            });
                        },
                })
                