
                    import { EventHandler } from '@arkw/core';
                    import { paginated_issue_attachmentsFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const paginated_issue_attachments: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-paginated_issue_attachments`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {  workspace,repo_slug,issue_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repositories/{workspace}/{repo_slug}/issues/{issue_id}/attachments'].get({
                                
                                params: {workspace,repo_slug,issue_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `paginated_issue_attachments`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `paginated_issue_attachments`,
                                properties: paginated_issue_attachmentsFields,
                            });
                        },
                })
                