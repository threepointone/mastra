
                    import { EventHandler } from '@arkw/core';
                    import { userAuthorizationFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const UserAuthorization_GetUserAuthorization: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-userAuthorization`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,authorizationId,userId, accountId,userId,authorizationId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/users/{userId}/authorization/{authorizationId}'].get({
                                query: {accountId,authorizationId,userId,},
                                params: {accountId,userId,authorizationId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `userAuthorization`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `userAuthorization`,
                                properties: userAuthorizationFields,
                            });
                        },
                })
                