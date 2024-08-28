
                    import { EventHandler } from '@arkw/core';
                    import { usersResponseFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const Groups_GetGroupUsers: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-usersResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,groupId,count,start_position, accountId,groupId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2.1/accounts/{accountId}/groups/{groupId}/users'].get({
                                query: {accountId,groupId,count,start_position,},
                                params: {accountId,groupId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `usersResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `usersResponse`,
                                properties: usersResponseFields,
                            });
                        },
                })
                