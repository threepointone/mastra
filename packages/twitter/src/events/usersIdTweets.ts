
                    import { EventHandler } from '@arkw/core';
                    import { Get2UsersIdTweetsResponseFields } from '../constants';
                    import { TwitterIntegration } from '..';

                    export const usersIdTweets: EventHandler<TwitterIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Get2UsersIdTweetsResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { id,since_id,until_id,max_results,pagination_token,exclude,start_time,end_time,TweetFieldsParameter,TweetExpansionsParameter,MediaFieldsParameter,PollFieldsParameter,UserFieldsParameter,PlaceFieldsParameter, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/2/users/{id}/tweets'].get({
                                query: {id,since_id,until_id,max_results,pagination_token,exclude,start_time,end_time,TweetFieldsParameter,TweetExpansionsParameter,MediaFieldsParameter,PollFieldsParameter,UserFieldsParameter,PlaceFieldsParameter,},
                                params: {id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Get2UsersIdTweetsResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Get2UsersIdTweetsResponse`,
                                properties: Get2UsersIdTweetsResponseFields,
                            });
                        },
                })
                