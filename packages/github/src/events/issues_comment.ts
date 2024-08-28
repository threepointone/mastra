
                    import { EventHandler } from '@arkw/core';
                    import { issue-commentFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const issues_comment: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-issue-comment`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo,comment-id,comment_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repos/{owner}/{repo}/issues/comments/{comment_id}'].get({
                                query: {owner,repo,comment-id,},
                                params: {owner,repo,comment_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `issue-comment`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `issue-comment`,
                                properties: issue-commentFields,
                            });
                        },
                })
                