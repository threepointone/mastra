
                    import { EventHandler } from '@arkw/core';
                    import { PageBeanIssueTypeToContextMappingFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const IssueTypeMappingsForContexts: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-PageBeanIssueTypeToContextMapping`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { fieldId,contextId,startAt,maxResults, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/field/{fieldId}/context/issuetypemapping'].get({
                                query: {fieldId,contextId,startAt,maxResults,},
                                params: {fieldId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PageBeanIssueTypeToContextMapping`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PageBeanIssueTypeToContextMapping`,
                                properties: PageBeanIssueTypeToContextMappingFields,
                            });
                        },
                })
                