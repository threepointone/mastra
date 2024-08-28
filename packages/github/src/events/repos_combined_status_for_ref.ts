
                    import { EventHandler } from '@arkw/core';
                    import { combined-commit-statusFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const repos_combined_status_for_ref: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-combined-commit-status`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo,ref,per-page,page, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repos/{owner}/{repo}/commits/{ref}/status'].get({
                                query: {owner,repo,ref,per-page,page,},
                                params: {owner,repo,ref,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `combined-commit-status`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `combined-commit-status`,
                                properties: combined-commit-statusFields,
                            });
                        },
                })
                