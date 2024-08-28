
                    import { EventHandler } from '@arkw/core';
                    import { paginated_repositoriesFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const paginated_repositories: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-paginated_repositories`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { role,q,sort, workspace,repo_slug,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repositories/{workspace}/{repo_slug}/forks'].get({
                                query: {role,q,sort,},
                                params: {workspace,repo_slug,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `paginated_repositories`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `paginated_repositories`,
                                properties: paginated_repositoriesFields,
                            });
                        },
                })
                