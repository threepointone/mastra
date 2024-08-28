
                    import { EventHandler } from '@arkw/core';
                    import { Get2TweetsCountsAllResponseFields } from '../constants';
                    import { TwitterIntegration } from '..';

                    export const tweetCountsFullArchiveSearch: EventHandler<TwitterIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Get2TweetsCountsAllResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { query,start_time,end_time,since_id,until_id,next_token,pagination_token,granularity,SearchCountFieldsParameter,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/2/tweets/counts/all'].get({
                                query: {query,start_time,end_time,since_id,until_id,next_token,pagination_token,granularity,SearchCountFieldsParameter,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Get2TweetsCountsAllResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Get2TweetsCountsAllResponse`,
                                properties: Get2TweetsCountsAllResponseFields,
                            });
                        },
                })
                