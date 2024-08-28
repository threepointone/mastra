
                    import { EventHandler } from '@arkw/core';
                    import { NotificationSchemeFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const NotificationScheme: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-NotificationScheme`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { id,expand, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/notificationscheme/{id}'].get({
                                query: {id,expand,},
                                params: {id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `NotificationScheme`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `NotificationScheme`,
                                properties: NotificationSchemeFields,
                            });
                        },
                })
                