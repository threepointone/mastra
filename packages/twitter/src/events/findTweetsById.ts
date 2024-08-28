
                    import { EventHandler } from '@arkw/core';
                    import { Get2TweetsResponseFields } from '../constants';
                    import { TwitterIntegration } from '..';

                    export const findTweetsById: EventHandler<TwitterIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-Get2TweetsResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { ids,TweetFieldsParameter,TweetExpansionsParameter,MediaFieldsParameter,PollFieldsParameter,UserFieldsParameter,PlaceFieldsParameter,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/2/tweets'].get({
                                query: {ids,TweetFieldsParameter,TweetExpansionsParameter,MediaFieldsParameter,PollFieldsParameter,UserFieldsParameter,PlaceFieldsParameter,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Get2TweetsResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Get2TweetsResponse`,
                                properties: Get2TweetsResponseFields,
                            });
                        },
                })
                