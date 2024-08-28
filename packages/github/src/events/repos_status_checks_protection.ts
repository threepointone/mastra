
                    import { EventHandler } from '@arkw/core';
                    import { status-check-policyFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const repos_status_checks_protection: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-status-check-policy`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo,branch, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks'].get({
                                query: {owner,repo,branch,},
                                params: {owner,repo,branch,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `status-check-policy`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `status-check-policy`,
                                properties: status-check-policyFields,
                            });
                        },
                })
                