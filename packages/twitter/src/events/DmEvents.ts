
                    import { EventHandler } from '@arkw/core';
                    import { Get2DmEventsResponseFields } from '../constants';
                    import { TwitterIntegration } from '..';

                    export const DmEvents: EventHandler<TwitterIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Get2DmEventsResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { max_results,pagination_token,event_types,DmEventFieldsParameter,DmEventExpansionsParameter,MediaFieldsParameter,UserFieldsParameter,TweetFieldsParameter,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/2/dm_events'].get({
                                query: {max_results,pagination_token,event_types,DmEventFieldsParameter,DmEventExpansionsParameter,MediaFieldsParameter,UserFieldsParameter,TweetFieldsParameter,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Get2DmEventsResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Get2DmEventsResponse`,
                                properties: Get2DmEventsResponseFields,
                            });
                        },
                })
                