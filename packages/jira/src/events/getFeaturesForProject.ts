
                    import { EventHandler } from '@arkw/core';
                    import { ContainerForProjectFeaturesFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const getFeaturesForProject: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-ContainerForProjectFeatures`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { projectIdOrKey, projectIdOrKey,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/rest/api/3/project/{projectIdOrKey}/features'].get({
                                query: {projectIdOrKey,},
                                params: {projectIdOrKey,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ContainerForProjectFeatures`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ContainerForProjectFeatures`,
                                properties: ContainerForProjectFeaturesFields,
                            });
                        },
                })
                