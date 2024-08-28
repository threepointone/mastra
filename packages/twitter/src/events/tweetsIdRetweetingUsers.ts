
                    import { EventHandler } from '@arkw/core';
                    import { Get2TweetsIdRetweetedByResponseFields } from '../constants';
                    import { TwitterIntegration } from '..';

                    export const tweetsIdRetweetingUsers: EventHandler<TwitterIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Get2TweetsIdRetweetedByResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { id,max_results,pagination_token,UserFieldsParameter,UserExpansionsParameter,TweetFieldsParameter, id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/2/tweets/{id}/retweeted_by'].get({
                                query: {id,max_results,pagination_token,UserFieldsParameter,UserExpansionsParameter,TweetFieldsParameter,},
                                params: {id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Get2TweetsIdRetweetedByResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Get2TweetsIdRetweetedByResponse`,
                                properties: Get2TweetsIdRetweetedByResponseFields,
                            });
                        },
                })
                