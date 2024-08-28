
                    import { EventHandler } from '@arkw/core';
                    import { webhook_endpointFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetWebhookEndpointsWebhookEndpoint: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-webhook_endpoint`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { expand,webhook_endpoint, webhook_endpoint,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v1/webhook_endpoints/{webhook_endpoint}'].get({
                                query: {expand,webhook_endpoint,},
                                params: {webhook_endpoint,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `webhook_endpoint`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `webhook_endpoint`,
                                properties: webhook_endpointFields,
                            });
                        },
                })
                