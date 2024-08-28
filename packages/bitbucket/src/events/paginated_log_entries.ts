
                    import { EventHandler } from '@arkw/core';
                    import { paginated_log_entriesFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const paginated_log_entries: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-paginated_log_entries`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { q,sort,workspace,repo_slug,issue_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repositories/{workspace}/{repo_slug}/issues/{issue_id}/changes'].get({
                                query: {q,sort,},
                                params: {workspace,repo_slug,issue_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `paginated_log_entries`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `paginated_log_entries`,
                                properties: paginated_log_entriesFields,
                            });
                        },
                })
                