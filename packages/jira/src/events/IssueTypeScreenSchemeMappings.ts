
                    import { EventHandler } from '@arkw/core';
                    import { PageBeanIssueTypeScreenSchemeItemFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const IssueTypeScreenSchemeMappings: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-PageBeanIssueTypeScreenSchemeItem`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { startAt,maxResults,issueTypeScreenSchemeId, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/issuetypescreenscheme/mapping'].get({
                                query: {startAt,maxResults,issueTypeScreenSchemeId,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PageBeanIssueTypeScreenSchemeItem`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PageBeanIssueTypeScreenSchemeItem`,
                                properties: PageBeanIssueTypeScreenSchemeItemFields,
                            });
                        },
                })
                