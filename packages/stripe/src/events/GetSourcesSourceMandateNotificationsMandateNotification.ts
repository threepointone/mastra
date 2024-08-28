
                    import { EventHandler } from '@arkw/core';
                    import { source_mandate_notificationFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetSourcesSourceMandateNotificationsMandateNotification: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-source_mandate_notification`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { expand,mandate_notification,source, source,mandate_notification,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v1/sources/{source}/mandate_notifications/{mandate_notification}'].get({
                                query: {expand,mandate_notification,source,},
                                params: {source,mandate_notification,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `source_mandate_notification`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `source_mandate_notification`,
                                properties: source_mandate_notificationFields,
                            });
                        },
                })
                