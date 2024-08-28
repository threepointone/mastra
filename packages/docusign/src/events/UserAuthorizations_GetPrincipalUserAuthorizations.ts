
                    import { EventHandler } from '@arkw/core';
                    import { userAuthorizationsFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const UserAuthorizations_GetPrincipalUserAuthorizations: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-userAuthorizations`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,userId,active_only,count,email_substring,permissions,start_position,user_name_substring, accountId,userId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2.1/accounts/{accountId}/users/{userId}/authorizations'].get({
                                query: {accountId,userId,active_only,count,email_substring,permissions,start_position,user_name_substring,},
                                params: {accountId,userId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `userAuthorizations`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `userAuthorizations`,
                                properties: userAuthorizationsFields,
                            });
                        },
                })
                