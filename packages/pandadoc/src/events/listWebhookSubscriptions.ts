
                    import { EventHandler } from '@arkw/core';
                    import { WebhookSubscriptionListResponseFields } from '../constants';
                    import { PandadocIntegration } from '..';

                    export const listWebhookSubscriptions: EventHandler<PandadocIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-WebhookSubscriptionListResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {    } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/public/v1/webhook-subscriptions'].get({
                                
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `WebhookSubscriptionListResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `WebhookSubscriptionListResponse`,
                                properties: WebhookSubscriptionListResponseFields,
                            });
                        },
                })
                