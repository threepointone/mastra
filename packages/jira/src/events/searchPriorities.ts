
                    import { EventHandler } from '@arkw/core';
                    import { PageBeanPriorityFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const searchPriorities: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-PageBeanPriority`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { startAt,maxResults,id,projectId,priorityName,onlyDefault,expand,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/rest/api/3/priority/search'].get({
                                query: {startAt,maxResults,id,projectId,priorityName,onlyDefault,expand,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PageBeanPriority`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PageBeanPriority`,
                                properties: PageBeanPriorityFields,
                            });
                        },
                })
                