
                    import { EventHandler } from '@arkw/core';
                    import { notificationFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const Notification_GetTemplatesTemplateIdNotification: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-notification`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,templateId, accountId,templateId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2.1/accounts/{accountId}/templates/{templateId}/notification'].get({
                                query: {accountId,templateId,},
                                params: {accountId,templateId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `notification`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `notification`,
                                properties: notificationFields,
                            });
                        },
                })
                