
                    import { EventHandler } from '@arkw/core';
                    import { ThreadFields } from '../constants';
                    import { Ring-centralIntegration } from '..';

                    export const Thread: EventHandler<Ring-centralIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Thread`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { threadId, threadId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/content_threads/{threadId}'].get({
                                query: {threadId,},
                                params: {threadId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Thread`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Thread`,
                                properties: ThreadFields,
                            });
                        },
                })
                