
                    import { EventHandler } from '@arkw/core';
                    import { paginated_deployment_variableFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const DeploymentVariables: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-paginated_deployment_variable`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { workspace,repo_slug,environment_uuid, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables'].get({
                                query: {workspace,repo_slug,environment_uuid,},
                                params: {workspace,repo_slug,environment_uuid,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `paginated_deployment_variable`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `paginated_deployment_variable`,
                                properties: paginated_deployment_variableFields,
                            });
                        },
                })
                