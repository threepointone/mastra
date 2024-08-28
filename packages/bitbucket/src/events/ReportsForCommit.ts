
                    import { EventHandler } from '@arkw/core';
                    import { paginated_reportsFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const ReportsForCommit: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-paginated_reports`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { workspace,repo_slug,commit, workspace,repo_slug,commit,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repositories/{workspace}/{repo_slug}/commit/{commit}/reports'].get({
                                query: {workspace,repo_slug,commit,},
                                params: {workspace,repo_slug,commit,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `paginated_reports`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `paginated_reports`,
                                properties: paginated_reportsFields,
                            });
                        },
                })
                