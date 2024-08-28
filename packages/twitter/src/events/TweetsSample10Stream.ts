
                    import { EventHandler } from '@arkw/core';
                    import { Get2TweetsSample10StreamResponseFields } from '../constants';
                    import { TwitterIntegration } from '..';

                    export const TweetsSample10Stream: EventHandler<TwitterIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Get2TweetsSample10StreamResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { backfill_minutes,partition,start_time,end_time,TweetFieldsParameter,TweetExpansionsParameter,MediaFieldsParameter,PollFieldsParameter,UserFieldsParameter,PlaceFieldsParameter, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/2/tweets/sample10/stream'].get({
                                query: {backfill_minutes,partition,start_time,end_time,TweetFieldsParameter,TweetExpansionsParameter,MediaFieldsParameter,PollFieldsParameter,UserFieldsParameter,PlaceFieldsParameter,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Get2TweetsSample10StreamResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Get2TweetsSample10StreamResponse`,
                                properties: Get2TweetsSample10StreamResponseFields,
                            });
                        },
                })
                