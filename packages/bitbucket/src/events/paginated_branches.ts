
                    import { EventHandler } from '@arkw/core';
                    import { paginated_branchesFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const paginated_branches: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-paginated_branches`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { q,sort, workspace,repo_slug,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repositories/{workspace}/{repo_slug}/refs/branches'].get({
                                query: {q,sort,},
                                params: {workspace,repo_slug,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `paginated_branches`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `paginated_branches`,
                                properties: paginated_branchesFields,
                            });
                        },
                })
                