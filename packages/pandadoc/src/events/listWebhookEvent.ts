
                    import { EventHandler } from '@arkw/core';
                    import { WebhookEventPageResponseFields } from '../constants';
                    import { PandadocIntegration } from '..';

                    export const listWebhookEvent: EventHandler<PandadocIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-WebhookEventPageResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { count,page,since,to,type,http_status_code,error,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/public/v1/webhook-events'].get({
                                query: {count,page,since,to,type,http_status_code,error,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `WebhookEventPageResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `WebhookEventPageResponse`,
                                properties: WebhookEventPageResponseFields,
                            });
                        },
                })
                