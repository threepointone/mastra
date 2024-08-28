
                    import { EventHandler } from '@arkw/core';
                    import { Get2SpacesIdTweetsResponseFields } from '../constants';
                    import { TwitterIntegration } from '..';

                    export const spaceTweets: EventHandler<TwitterIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Get2SpacesIdTweetsResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { id,max_results,TweetFieldsParameter,TweetExpansionsParameter,MediaFieldsParameter,PollFieldsParameter,UserFieldsParameter,PlaceFieldsParameter, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/2/spaces/{id}/tweets'].get({
                                query: {id,max_results,TweetFieldsParameter,TweetExpansionsParameter,MediaFieldsParameter,PollFieldsParameter,UserFieldsParameter,PlaceFieldsParameter,},
                                params: {id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Get2SpacesIdTweetsResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Get2SpacesIdTweetsResponse`,
                                properties: Get2SpacesIdTweetsResponseFields,
                            });
                        },
                })
                