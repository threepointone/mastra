
                    import { EventHandler } from '@arkw/core';
                    import { thread-subscriptionFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const activity_thread_subscription_for_authenticated_user: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-thread-subscription`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { thread-id,thread_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/notifications/threads/{thread_id}/subscription'].get({
                                query: {thread-id,},
                                params: {thread_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `thread-subscription`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `thread-subscription`,
                                properties: thread-subscriptionFields,
                            });
                        },
                })
                