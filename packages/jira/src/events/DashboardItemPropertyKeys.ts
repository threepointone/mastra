
                    import { EventHandler } from '@arkw/core';
                    import { PropertyKeysFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const DashboardItemPropertyKeys: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-PropertyKeys`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { dashboardId,itemId, dashboardId,itemId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/dashboard/{dashboardId}/items/{itemId}/properties'].get({
                                query: {dashboardId,itemId,},
                                params: {dashboardId,itemId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PropertyKeys`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PropertyKeys`,
                                properties: PropertyKeysFields,
                            });
                        },
                })
                