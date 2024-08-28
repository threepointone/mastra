
                    import { EventHandler } from '@arkw/core';
                    import { paginated_branchrestrictionsFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const paginated_branchrestrictions: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-paginated_branchrestrictions`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { kind,pattern, workspace,repo_slug,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repositories/{workspace}/{repo_slug}/branch-restrictions'].get({
                                query: {kind,pattern,},
                                params: {workspace,repo_slug,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `paginated_branchrestrictions`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `paginated_branchrestrictions`,
                                properties: paginated_branchrestrictionsFields,
                            });
                        },
                })
                