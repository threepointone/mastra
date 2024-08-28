
                    import { EventHandler } from '@arkw/core';
                    import { ReplyAssistantGroupFields } from '../constants';
                    import { Ring-centralIntegration } from '..';

                    export const getReplyAssistantGroup: EventHandler<Ring-centralIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-ReplyAssistantGroup`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { replyAssistantGroupId, replyAssistantGroupId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/reply_assistant/groups/{replyAssistantGroupId}'].get({
                                query: {replyAssistantGroupId,},
                                params: {replyAssistantGroupId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ReplyAssistantGroup`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ReplyAssistantGroup`,
                                properties: ReplyAssistantGroupFields,
                            });
                        },
                })
                