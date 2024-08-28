
                    import { EventHandler } from '@arkw/core';
                    import { git-treeFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const git-tree: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-git-tree`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo,tree_sha,recursive, owner,repo,tree_sha,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/repos/{owner}/{repo}/git/trees/{tree_sha}'].get({
                                query: {owner,repo,tree_sha,recursive,},
                                params: {owner,repo,tree_sha,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `git-tree`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `git-tree`,
                                properties: git-treeFields,
                            });
                        },
                })
                