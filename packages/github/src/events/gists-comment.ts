
                    import { EventHandler } from '@arkw/core';
                    import { gist-commentFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const gists-comment: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-gist-comment`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { gist-id,comment-id, gist_id,comment_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/gists/{gist_id}/comments/{comment_id}'].get({
                                query: {gist-id,comment-id,},
                                params: {gist_id,comment_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `gist-comment`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `gist-comment`,
                                properties: gist-commentFields,
                            });
                        },
                })
                