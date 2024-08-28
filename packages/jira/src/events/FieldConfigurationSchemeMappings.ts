
                    import { EventHandler } from '@arkw/core';
                    import { PageBeanFieldConfigurationIssueTypeItemFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const FieldConfigurationSchemeMappings: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-PageBeanFieldConfigurationIssueTypeItem`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { startAt,maxResults,fieldConfigurationSchemeId,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/rest/api/3/fieldconfigurationscheme/mapping'].get({
                                query: {startAt,maxResults,fieldConfigurationSchemeId,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PageBeanFieldConfigurationIssueTypeItem`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PageBeanFieldConfigurationIssueTypeItem`,
                                properties: PageBeanFieldConfigurationIssueTypeItemFields,
                            });
                        },
                })
                