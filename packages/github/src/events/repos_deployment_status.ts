
                    import { EventHandler } from '@arkw/core';
                    import { deployment-statusFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const repos_deployment_status: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-deployment-status`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo,deployment-id,status_id,deployment_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}'].get({
                                query: {owner,repo,deployment-id,status_id,},
                                params: {owner,repo,deployment_id,status_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `deployment-status`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `deployment-status`,
                                properties: deployment-statusFields,
                            });
                        },
                })
                