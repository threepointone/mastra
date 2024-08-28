
                    import { EventHandler } from '@arkw/core';
                    import { PageBeanResolutionJsonBeanFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const searchResolutions: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-PageBeanResolutionJsonBean`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { startAt,maxResults,id,onlyDefault,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/rest/api/3/resolution/search'].get({
                                query: {startAt,maxResults,id,onlyDefault,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PageBeanResolutionJsonBean`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PageBeanResolutionJsonBean`,
                                properties: PageBeanResolutionJsonBeanFields,
                            });
                        },
                })
                