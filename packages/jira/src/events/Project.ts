
                    import { EventHandler } from '@arkw/core';
                    import { ProjectFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const Project: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Project`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { projectIdOrKey,expand,properties, projectIdOrKey,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/project/{projectIdOrKey}'].get({
                                query: {projectIdOrKey,expand,properties,},
                                params: {projectIdOrKey,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Project`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Project`,
                                properties: ProjectFields,
                            });
                        },
                })
                