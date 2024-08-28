
                    import { EventHandler } from '@arkw/core';
                    import { PageBeanCustomFieldContextDefaultValueFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const getDefaultValues: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-PageBeanCustomFieldContextDefaultValue`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { fieldId,contextId,startAt,maxResults, fieldId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/rest/api/3/field/{fieldId}/context/defaultValue'].get({
                                query: {fieldId,contextId,startAt,maxResults,},
                                params: {fieldId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PageBeanCustomFieldContextDefaultValue`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PageBeanCustomFieldContextDefaultValue`,
                                properties: PageBeanCustomFieldContextDefaultValueFields,
                            });
                        },
                })
                