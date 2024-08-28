
                    import { EventHandler } from '@arkw/core';
                    import { WebhookFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const get_webhooks_id: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-Webhook`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { webhook_id, webhook_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/webhooks/{webhook_id}'].get({
                                query: {webhook_id,},
                                params: {webhook_id,} })

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
                