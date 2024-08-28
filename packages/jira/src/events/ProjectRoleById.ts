
                    import { EventHandler } from '@arkw/core';
                    import { ProjectRoleFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const ProjectRoleById: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-ProjectRole`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { id, id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/rest/api/3/role/{id}'].get({
                                query: {id,},
                                params: {id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ProjectRole`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ProjectRole`,
                                properties: ProjectRoleFields,
                            });
                        },
                })
                