
                    import { EventHandler } from '@arkw/core';
                    import { StripeIntegration } from '..';

                    export const GetIssuingCardholders: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-issuing.cardholder`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })
                            const response = await proxy['/v1/issuing/cardholders'].get()

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `issuing.cardholder`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `issuing.cardholder`,
                                properties: [],
                            });
                        },
                })
                