
                    import { EventHandler } from '@arkw/core';
                    import { Get2TweetsSearchRecentResponseFields } from '../constants';
                    import { TwitterIntegration } from '..';

                    export const tweetsRecentSearch: EventHandler<TwitterIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Get2TweetsSearchRecentResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { query,start_time,end_time,since_id,until_id,max_results,next_token,pagination_token,sort_order,TweetFieldsParameter,TweetExpansionsParameter,MediaFieldsParameter,PollFieldsParameter,UserFieldsParameter,PlaceFieldsParameter,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/2/tweets/search/recent'].get({
                                query: {query,start_time,end_time,since_id,until_id,max_results,next_token,pagination_token,sort_order,TweetFieldsParameter,TweetExpansionsParameter,MediaFieldsParameter,PollFieldsParameter,UserFieldsParameter,PlaceFieldsParameter,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Get2TweetsSearchRecentResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Get2TweetsSearchRecentResponse`,
                                properties: Get2TweetsSearchRecentResponseFields,
                            });
                        },
                })
                