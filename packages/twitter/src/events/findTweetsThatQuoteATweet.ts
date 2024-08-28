
                    import { EventHandler } from '@arkw/core';
                    import { Get2TweetsIdQuoteTweetsResponseFields } from '../constants';
                    import { TwitterIntegration } from '..';

                    export const findTweetsThatQuoteATweet: EventHandler<TwitterIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-Get2TweetsIdQuoteTweetsResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { id,max_results,pagination_token,exclude,TweetFieldsParameter,TweetExpansionsParameter,MediaFieldsParameter,PollFieldsParameter,UserFieldsParameter,PlaceFieldsParameter, id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/2/tweets/{id}/quote_tweets'].get({
                                query: {id,max_results,pagination_token,exclude,TweetFieldsParameter,TweetExpansionsParameter,MediaFieldsParameter,PollFieldsParameter,UserFieldsParameter,PlaceFieldsParameter,},
                                params: {id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Get2TweetsIdQuoteTweetsResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Get2TweetsIdQuoteTweetsResponse`,
                                properties: Get2TweetsIdQuoteTweetsResponseFields,
                            });
                        },
                })
                