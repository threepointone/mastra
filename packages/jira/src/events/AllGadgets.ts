
                    import { EventHandler } from '@arkw/core';
                    import { DashboardGadgetResponseFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const AllGadgets: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-DashboardGadgetResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { dashboardId,moduleKey,uri,gadgetId, dashboardId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/rest/api/3/dashboard/{dashboardId}/gadget'].get({
                                query: {dashboardId,moduleKey,uri,gadgetId,},
                                params: {dashboardId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `DashboardGadgetResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `DashboardGadgetResponse`,
                                properties: DashboardGadgetResponseFields,
                            });
                        },
                })
                