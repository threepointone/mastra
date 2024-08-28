
                    import { EventHandler } from '@arkw/core';
                    import { PageBeanSecuritySchemeWithProjectsFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const searchSecuritySchemes: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-PageBeanSecuritySchemeWithProjects`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { startAt,maxResults,id,projectId,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/rest/api/3/issuesecurityschemes/search'].get({
                                query: {startAt,maxResults,id,projectId,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PageBeanSecuritySchemeWithProjects`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PageBeanSecuritySchemeWithProjects`,
                                properties: PageBeanSecuritySchemeWithProjectsFields,
                            });
                        },
                })
                