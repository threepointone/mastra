
                    import { EventHandler } from '@arkw/core';
                    import { PaymentMethodFields } from '../constants';
                    import { WebflowIntegration } from '..';

                    export const PaymentMethod: EventHandler<WebflowIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-PaymentMethod`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { paymentMethodId, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/paymentMethods/{paymentMethodId}'].get({
                                query: {paymentMethodId,},
                                params: {paymentMethodId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PaymentMethod`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PaymentMethod`,
                                properties: PaymentMethodFields,
                            });
                        },
                })
                