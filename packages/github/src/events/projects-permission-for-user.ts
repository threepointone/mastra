
                    import { EventHandler } from '@arkw/core';
                    import { project-collaborator-permissionFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const projects-permission-for-user: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-project-collaborator-permission`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { project-id,username, project_id,username,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/projects/{project_id}/collaborators/{username}/permission'].get({
                                query: {project-id,username,},
                                params: {project_id,username,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `project-collaborator-permission`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `project-collaborator-permission`,
                                properties: project-collaborator-permissionFields,
                            });
                        },
                })
                