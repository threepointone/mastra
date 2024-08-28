
                    import { EventHandler } from '@arkw/core';
                    import { paginated_treeentriesFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const paginated_treeentries: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-paginated_treeentries`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { format,q,sort,max_depth, workspace,repo_slug,commit,path,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/repositories/{workspace}/{repo_slug}/src/{commit}/{path}'].get({
                                query: {format,q,sort,max_depth,},
                                params: {workspace,repo_slug,commit,path,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `paginated_treeentries`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `paginated_treeentries`,
                                properties: paginated_treeentriesFields,
                            });
                        },
                })
                