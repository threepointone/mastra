
                    import { EventHandler } from '@arkw/core';
                    import { WebhooksFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const _webhooks: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Webhooks`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { marker,limit,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/webhooks'].get({
                                query: {marker,limit,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Webhooks`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Webhooks`,
                                properties: WebhooksFields,
                            });
                        },
                })
                