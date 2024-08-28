
                    import { EventHandler } from '@arkw/core';
                    import { PageBeanIssueTypeSchemeMappingFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const IssueTypeSchemesMapping: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-PageBeanIssueTypeSchemeMapping`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { startAt,maxResults,issueTypeSchemeId,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/issuetypescheme/mapping'].get({
                                query: {startAt,maxResults,issueTypeSchemeId,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PageBeanIssueTypeSchemeMapping`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PageBeanIssueTypeSchemeMapping`,
                                properties: PageBeanIssueTypeSchemeMappingFields,
                            });
                        },
                })
                