
                    import { EventHandler } from '@arkw/core';
                    import { PageBeanDashboardFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const DashboardsPaginated: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-PageBeanDashboard`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { dashboardName,accountId,owner,groupname,groupId,projectId,orderBy,startAt,maxResults,status,expand, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/dashboard/search'].get({
                                query: {dashboardName,accountId,owner,groupname,groupId,projectId,orderBy,startAt,maxResults,status,expand,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PageBeanDashboard`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PageBeanDashboard`,
                                properties: PageBeanDashboardFields,
                            });
                        },
                })
                