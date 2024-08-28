
                    import { EventHandler } from '@arkw/core';
                    import { dependency-graph-diffFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const dependency_graphdiff_range: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-dependency-graph-diff`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo,basehead,manifest-path, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repos/{owner}/{repo}/dependency-graph/compare/{basehead}'].get({
                                query: {owner,repo,basehead,manifest-path,},
                                params: {owner,repo,basehead,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `dependency-graph-diff`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `dependency-graph-diff`,
                                properties: dependency-graph-diffFields,
                            });
                        },
                })
                