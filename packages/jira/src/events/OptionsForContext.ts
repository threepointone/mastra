
                    import { EventHandler } from '@arkw/core';
                    import { PageBeanCustomFieldContextOptionFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const OptionsForContext: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-PageBeanCustomFieldContextOption`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { fieldId,contextId,optionId,onlyOptions,startAt,maxResults, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/field/{fieldId}/context/{contextId}/option'].get({
                                query: {fieldId,contextId,optionId,onlyOptions,startAt,maxResults,},
                                params: {fieldId,contextId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PageBeanCustomFieldContextOption`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PageBeanCustomFieldContextOption`,
                                properties: PageBeanCustomFieldContextOptionFields,
                            });
                        },
                })
                