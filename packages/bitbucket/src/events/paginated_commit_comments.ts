
                    import { EventHandler } from '@arkw/core';
                    import { paginated_commit_commentsFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const paginated_commit_comments: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-paginated_commit_comments`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { q,sort, workspace,repo_slug,commit,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/repositories/{workspace}/{repo_slug}/commit/{commit}/comments'].get({
                                query: {q,sort,},
                                params: {workspace,repo_slug,commit,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `paginated_commit_comments`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `paginated_commit_comments`,
                                properties: paginated_commit_commentsFields,
                            });
                        },
                })
                