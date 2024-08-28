
                    import { EventHandler } from '@arkw/core';
                    import { DeploymentEnvironmentFields } from '../constants';
                    import { WebflowIntegration } from '..';

                    export const DeploymentEnvironment: EventHandler<WebflowIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-DeploymentEnvironment`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { deploymentEnvironmentId, deploymentEnvironmentId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/deploymentEnvironments/{deploymentEnvironmentId}'].get({
                                query: {deploymentEnvironmentId,},
                                params: {deploymentEnvironmentId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `DeploymentEnvironment`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `DeploymentEnvironment`,
                                properties: DeploymentEnvironmentFields,
                            });
                        },
                })
                