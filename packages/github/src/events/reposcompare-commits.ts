
                    import { EventHandler } from '@arkw/core';
                    import { commit-comparisonFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const reposcompare-commits: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-commit-comparison`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo,page,per-page,basehead, owner,repo,basehead,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repos/{owner}/{repo}/compare/{basehead}'].get({
                                query: {owner,repo,page,per-page,basehead,},
                                params: {owner,repo,basehead,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `commit-comparison`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `commit-comparison`,
                                properties: commit-comparisonFields,
                            });
                        },
                })
                