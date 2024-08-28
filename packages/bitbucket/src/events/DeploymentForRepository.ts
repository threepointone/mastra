
                    import { EventHandler } from '@arkw/core';
                    import { deploymentFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const DeploymentForRepository: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-deployment`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { workspace,repo_slug,deployment_uuid, workspace,repo_slug,deployment_uuid,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repositories/{workspace}/{repo_slug}/deployments/{deployment_uuid}'].get({
                                query: {workspace,repo_slug,deployment_uuid,},
                                params: {workspace,repo_slug,deployment_uuid,} })

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
                