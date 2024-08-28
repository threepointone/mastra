
                    import { EventHandler } from '@arkw/core';
                    import { git-commitFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const git_commit: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-git-commit`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo,commit-sha,commit_sha, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repos/{owner}/{repo}/git/commits/{commit_sha}'].get({
                                query: {owner,repo,commit-sha,},
                                params: {owner,repo,commit_sha,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `git-commit`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `git-commit`,
                                properties: git-commitFields,
                            });
                        },
                })
                