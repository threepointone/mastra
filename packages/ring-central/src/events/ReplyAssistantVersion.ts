
                    import { EventHandler } from '@arkw/core';
                    import { ReplyAssistantVersionFields } from '../constants';
                    import { Ring-centralIntegration } from '..';

                    export const ReplyAssistantVersion: EventHandler<Ring-centralIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-ReplyAssistantVersion`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { replyAssistantVersionId, replyAssistantVersionId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/reply_assistant/versions/{replyAssistantVersionId}'].get({
                                query: {replyAssistantVersionId,},
                                params: {replyAssistantVersionId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ReplyAssistantVersion`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ReplyAssistantVersion`,
                                properties: ReplyAssistantVersionFields,
                            });
                        },
                })
                