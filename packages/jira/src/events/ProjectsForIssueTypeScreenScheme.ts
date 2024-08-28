
                    import { EventHandler } from '@arkw/core';
                    import { PageBeanProjectDetailsFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const ProjectsForIssueTypeScreenScheme: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-PageBeanProjectDetails`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { issueTypeScreenSchemeId,startAt,maxResults,query, issueTypeScreenSchemeId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/rest/api/3/issuetypescreenscheme/{issueTypeScreenSchemeId}/project'].get({
                                query: {issueTypeScreenSchemeId,startAt,maxResults,query,},
                                params: {issueTypeScreenSchemeId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PageBeanProjectDetails`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PageBeanProjectDetails`,
                                properties: PageBeanProjectDetailsFields,
                            });
                        },
                })
                