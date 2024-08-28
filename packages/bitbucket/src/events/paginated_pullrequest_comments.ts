
                    import { EventHandler } from '@arkw/core';
                    import { paginated_pullrequest_commentsFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const paginated_pullrequest_comments: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-paginated_pullrequest_comments`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {  workspace,repo_slug,pull_request_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments'].get({
                                
                                params: {workspace,repo_slug,pull_request_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `paginated_pullrequest_comments`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `paginated_pullrequest_comments`,
                                properties: paginated_pullrequest_commentsFields,
                            });
                        },
                })
                