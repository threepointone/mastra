
                    import { EventHandler } from '@arkw/core';
                    import { full-repositoryFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const repos: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-full-repository`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repos/{owner}/{repo}'].get({
                                query: {owner,repo,},
                                params: {owner,repo,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `full-repository`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `full-repository`,
                                properties: full-repositoryFields,
                            });
                        },
                })
                