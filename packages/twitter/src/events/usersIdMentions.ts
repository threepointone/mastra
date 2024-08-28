
                    import { EventHandler } from '@arkw/core';
                    import { Get2UsersIdMentionsResponseFields } from '../constants';
                    import { TwitterIntegration } from '..';

                    export const usersIdMentions: EventHandler<TwitterIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Get2UsersIdMentionsResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { id,since_id,until_id,max_results,pagination_token,start_time,end_time,TweetFieldsParameter,TweetExpansionsParameter,MediaFieldsParameter,PollFieldsParameter,UserFieldsParameter,PlaceFieldsParameter, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/2/users/{id}/mentions'].get({
                                query: {id,since_id,until_id,max_results,pagination_token,start_time,end_time,TweetFieldsParameter,TweetExpansionsParameter,MediaFieldsParameter,PollFieldsParameter,UserFieldsParameter,PlaceFieldsParameter,},
                                params: {id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Get2UsersIdMentionsResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Get2UsersIdMentionsResponse`,
                                properties: Get2UsersIdMentionsResponseFields,
                            });
                        },
                })
                