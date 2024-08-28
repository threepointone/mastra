
                    import { EventHandler } from '@arkw/core';
                    import { paginated_issue_commentsFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const paginated_issue_comments: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-paginated_issue_comments`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { q, workspace,repo_slug,issue_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments'].get({
                                query: {q,},
                                params: {workspace,repo_slug,issue_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `paginated_issue_comments`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `paginated_issue_comments`,
                                properties: paginated_issue_commentsFields,
                            });
                        },
                })
                