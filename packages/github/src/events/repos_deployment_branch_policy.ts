
                    import { EventHandler } from '@arkw/core';
                    import { deployment-branch-policyFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const repos_deployment_branch_policy: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-deployment-branch-policy`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo,environment-name,branch-policy-id,environment_name,branch_policy_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}'].get({
                                query: {owner,repo,environment-name,branch-policy-id,},
                                params: {owner,repo,environment_name,branch_policy_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `deployment-branch-policy`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `deployment-branch-policy`,
                                properties: deployment-branch-policyFields,
                            });
                        },
                })
                