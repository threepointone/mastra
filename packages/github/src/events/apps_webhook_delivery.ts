
                    import { EventHandler } from '@arkw/core';
                    import { hook-deliveryFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const apps_webhook_delivery: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-hook-delivery`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { delivery-id,delivery_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/app/hook/deliveries/{delivery_id}'].get({
                                query: {delivery-id,},
                                params: {delivery_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `hook-delivery`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `hook-delivery`,
                                properties: hook-deliveryFields,
                            });
                        },
                })
                