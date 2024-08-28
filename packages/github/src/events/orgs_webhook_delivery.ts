
                    import { EventHandler } from '@arkw/core';
                    import { hook-deliveryFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const orgs_webhook_delivery: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-hook-delivery`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { org,hook-id,delivery-id,hook_id,delivery_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}'].get({
                                query: {org,hook-id,delivery-id,},
                                params: {org,hook_id,delivery_id,} })

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
                