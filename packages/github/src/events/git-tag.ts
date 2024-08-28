
                    import { EventHandler } from '@arkw/core';
                    import { git-tagFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const git-tag: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-git-tag`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo,tag_sha, owner,repo,tag_sha,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repos/{owner}/{repo}/git/tags/{tag_sha}'].get({
                                query: {owner,repo,tag_sha,},
                                params: {owner,repo,tag_sha,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `git-tag`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `git-tag`,
                                properties: git-tagFields,
                            });
                        },
                })
                