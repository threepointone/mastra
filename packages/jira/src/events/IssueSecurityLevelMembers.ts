
                    import { EventHandler } from '@arkw/core';
                    import { PageBeanIssueSecurityLevelMemberFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const IssueSecurityLevelMembers: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-PageBeanIssueSecurityLevelMember`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { issueSecuritySchemeId,startAt,maxResults,issueSecurityLevelId,expand, issueSecuritySchemeId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/issuesecurityschemes/{issueSecuritySchemeId}/members'].get({
                                query: {issueSecuritySchemeId,startAt,maxResults,issueSecurityLevelId,expand,},
                                params: {issueSecuritySchemeId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PageBeanIssueSecurityLevelMember`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PageBeanIssueSecurityLevelMember`,
                                properties: PageBeanIssueSecurityLevelMemberFields,
                            });
                        },
                })
                