
                    import { EventHandler } from '@arkw/core';
                    import { DeploymentEnvironmentsFields } from '../constants';
                    import { WebflowIntegration } from '..';

                    export const DeploymentEnvironments: EventHandler<WebflowIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-DeploymentEnvironments`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,nextToken,maxResults, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/deploymentEnvironments'].get({
                                query: {owner,nextToken,maxResults,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `DeploymentEnvironments`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `DeploymentEnvironments`,
                                properties: DeploymentEnvironmentsFields,
                            });
                        },
                })
                