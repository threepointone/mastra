
                    import { EventHandler } from '@arkw/core';
                    import { Get2UsersIdFollowingResponseFields } from '../constants';
                    import { TwitterIntegration } from '..';

                    export const usersIdFollowing: EventHandler<TwitterIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Get2UsersIdFollowingResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { id,max_results,pagination_token,UserFieldsParameter,UserExpansionsParameter,TweetFieldsParameter, id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/2/users/{id}/following'].get({
                                query: {id,max_results,pagination_token,UserFieldsParameter,UserExpansionsParameter,TweetFieldsParameter,},
                                params: {id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Get2UsersIdFollowingResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Get2UsersIdFollowingResponse`,
                                properties: Get2UsersIdFollowingResponseFields,
                            });
                        },
                })
                