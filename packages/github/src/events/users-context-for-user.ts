
                    import { EventHandler } from '@arkw/core';
                    import { hovercardFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const users-context-for-user: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-hovercard`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { username,subject_type,subject_id, username,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/users/{username}/hovercard'].get({
                                query: {username,subject_type,subject_id,},
                                params: {username,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `hovercard`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `hovercard`,
                                properties: hovercardFields,
                            });
                        },
                })
                