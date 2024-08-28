
                    import { EventHandler } from '@arkw/core';
                    import { GetPaymentResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const GetPayment: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-GetPaymentResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { payment_id, payment_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2/payments/{payment_id}'].get({
                                query: {payment_id,},
                                params: {payment_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `GetPaymentResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `GetPaymentResponse`,
                                properties: GetPaymentResponseFields,
                            });
                        },
                })
                