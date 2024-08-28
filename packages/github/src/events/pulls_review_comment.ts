
                    import { EventHandler } from '@arkw/core';
                    import { pull-request-review-commentFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const pulls_review_comment: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-pull-request-review-comment`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo,comment-id,comment_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repos/{owner}/{repo}/pulls/comments/{comment_id}'].get({
                                query: {owner,repo,comment-id,},
                                params: {owner,repo,comment_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `pull-request-review-comment`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `pull-request-review-comment`,
                                properties: pull-request-review-commentFields,
                            });
                        },
                })
                