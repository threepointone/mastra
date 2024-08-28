
                    import { EventHandler } from '@arkw/core';
                    import { PageOfDashboardsFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const AllDashboards: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-PageOfDashboards`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { filter,startAt,maxResults,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/rest/api/3/dashboard'].get({
                                query: {filter,startAt,maxResults,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PageOfDashboards`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PageOfDashboards`,
                                properties: PageOfDashboardsFields,
                            });
                        },
                })
                