
                    import { EventHandler } from '@arkw/core';
                    import { PageBeanCustomFieldContextFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const ContextsForField: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-PageBeanCustomFieldContext`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { fieldId,isAnyIssueType,isGlobalContext,contextId,startAt,maxResults, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/field/{fieldId}/context'].get({
                                query: {fieldId,isAnyIssueType,isGlobalContext,contextId,startAt,maxResults,},
                                params: {fieldId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PageBeanCustomFieldContext`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PageBeanCustomFieldContext`,
                                properties: PageBeanCustomFieldContextFields,
                            });
                        },
                })
                