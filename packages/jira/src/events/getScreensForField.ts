
                    import { EventHandler } from '@arkw/core';
                    import { PageBeanScreenWithTabFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const getScreensForField: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-PageBeanScreenWithTab`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { fieldId,startAt,maxResults,expand, fieldId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/rest/api/3/field/{fieldId}/screens'].get({
                                query: {fieldId,startAt,maxResults,expand,},
                                params: {fieldId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PageBeanScreenWithTab`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PageBeanScreenWithTab`,
                                properties: PageBeanScreenWithTabFields,
                            });
                        },
                })
                