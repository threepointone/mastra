
                    import { EventHandler } from '@arkw/core';
                    import { ProjectTypeFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const ProjectTypeByKey: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-ProjectType`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { projectTypeKey, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/project/type/{projectTypeKey}'].get({
                                query: {projectTypeKey,},
                                params: {projectTypeKey,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ProjectType`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ProjectType`,
                                properties: ProjectTypeFields,
                            });
                        },
                })
                