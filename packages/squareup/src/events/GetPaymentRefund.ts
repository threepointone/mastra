
                    import { EventHandler } from '@arkw/core';
                    import { GetPaymentRefundResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const GetPaymentRefund: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-GetPaymentRefundResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { refund_id, refund_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2/refunds/{refund_id}'].get({
                                query: {refund_id,},
                                params: {refund_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `GetPaymentRefundResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `GetPaymentRefundResponse`,
                                properties: GetPaymentRefundResponseFields,
                            });
                        },
                })
                