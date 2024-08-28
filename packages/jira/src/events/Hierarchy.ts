
                    import { EventHandler } from '@arkw/core';
                    import { ProjectIssueTypeHierarchyFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const Hierarchy: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-ProjectIssueTypeHierarchy`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { projectId, projectId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/rest/api/3/project/{projectId}/hierarchy'].get({
                                query: {projectId,},
                                params: {projectId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ProjectIssueTypeHierarchy`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ProjectIssueTypeHierarchy`,
                                properties: ProjectIssueTypeHierarchyFields,
                            });
                        },
                })
                