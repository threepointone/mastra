
                    import { EventHandler } from '@arkw/core';
                    import { deploymentFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const repos_deployment: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-deployment`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo,deployment-id,deployment_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repos/{owner}/{repo}/deployments/{deployment_id}'].get({
                                query: {owner,repo,deployment-id,},
                                params: {owner,repo,deployment_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `deployment`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `deployment`,
                                properties: deploymentFields,
                            });
                        },
                })
                