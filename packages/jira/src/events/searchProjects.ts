
                    import { EventHandler } from '@arkw/core';
                    import { PageBeanProjectFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const searchProjects: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-PageBeanProject`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { startAt,maxResults,orderBy,id,keys,query,typeKey,categoryId,action,expand,status,properties,propertyQuery,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/project/search'].get({
                                query: {startAt,maxResults,orderBy,id,keys,query,typeKey,categoryId,action,expand,status,properties,propertyQuery,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PageBeanProject`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PageBeanProject`,
                                properties: PageBeanProjectFields,
                            });
                        },
                })
                