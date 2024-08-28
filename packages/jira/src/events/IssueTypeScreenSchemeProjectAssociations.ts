
                    import { EventHandler } from '@arkw/core';
                    import { PageBeanIssueTypeScreenSchemesProjectsFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const IssueTypeScreenSchemeProjectAssociations: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-PageBeanIssueTypeScreenSchemesProjects`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { startAt,maxResults,projectId,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/issuetypescreenscheme/project'].get({
                                query: {startAt,maxResults,projectId,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PageBeanIssueTypeScreenSchemesProjects`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PageBeanIssueTypeScreenSchemesProjects`,
                                properties: PageBeanIssueTypeScreenSchemesProjectsFields,
                            });
                        },
                })
                