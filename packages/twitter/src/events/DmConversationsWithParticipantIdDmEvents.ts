
                    import { EventHandler } from '@arkw/core';
                    import { Get2DmConversationsWithParticipantIdDmEventsResponseFields } from '../constants';
                    import { TwitterIntegration } from '..';

                    export const DmConversationsWithParticipantIdDmEvents: EventHandler<TwitterIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Get2DmConversationsWithParticipantIdDmEventsResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { participant_id,max_results,pagination_token,event_types,DmEventFieldsParameter,DmEventExpansionsParameter,MediaFieldsParameter,UserFieldsParameter,TweetFieldsParameter, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/2/dm_conversations/with/{participant_id}/dm_events'].get({
                                query: {participant_id,max_results,pagination_token,event_types,DmEventFieldsParameter,DmEventExpansionsParameter,MediaFieldsParameter,UserFieldsParameter,TweetFieldsParameter,},
                                params: {participant_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Get2DmConversationsWithParticipantIdDmEventsResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Get2DmConversationsWithParticipantIdDmEventsResponse`,
                                properties: Get2DmConversationsWithParticipantIdDmEventsResponseFields,
                            });
                        },
                })
                