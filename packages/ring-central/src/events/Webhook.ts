
                    import { EventHandler } from '@arkw/core';
                    import { WebhookFields } from '../constants';
                    import { Ring-centralIntegration } from '..';

                    export const Webhook: EventHandler<Ring-centralIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Webhook`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { webhookId,access_token, webhookId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/webhooks/{webhookId}'].get({
                                query: {webhookId,access_token,},
                                params: {webhookId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Webhook`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Webhook`,
                                properties: WebhookFields,
                            });
                        },
                })
                