
                    import { EventHandler } from '@arkw/core';
                    import { projectFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const projects: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-project`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { project-id, project_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/projects/{project_id}'].get({
                                query: {project-id,},
                                params: {project_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `project`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `project`,
                                properties: projectFields,
                            });
                        },
                })
                