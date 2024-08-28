
                    import { EventHandler } from '@arkw/core';
                    import { issue_commentFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const issue_comment: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-issue_comment`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { workspace,repo_slug,issue_id,comment_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments/{comment_id}'].get({
                                
                                params: {workspace,repo_slug,issue_id,comment_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `issue_comment`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `issue_comment`,
                                properties: issue_commentFields,
                            });
                        },
                })
                