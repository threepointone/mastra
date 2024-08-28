
                    import { EventHandler } from '@arkw/core';
                    import { ReplyAssistantEntryFields } from '../constants';
                    import { Ring-centralIntegration } from '..';

                    export const ReplyAssistantEntry: EventHandler<Ring-centralIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-ReplyAssistantEntry`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { replyAssistantEntryId, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/reply_assistant/entries/{replyAssistantEntryId}'].get({
                                query: {replyAssistantEntryId,},
                                params: {replyAssistantEntryId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ReplyAssistantEntry`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ReplyAssistantEntry`,
                                properties: ReplyAssistantEntryFields,
                            });
                        },
                })
                