
                    import { EventHandler } from '@arkw/core';
                    import { GetTerminalRefundResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const GetTerminalRefund: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-GetTerminalRefundResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { terminal_refund_id, terminal_refund_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2/terminals/refunds/{terminal_refund_id}'].get({
                                query: {terminal_refund_id,},
                                params: {terminal_refund_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `GetTerminalRefundResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `GetTerminalRefundResponse`,
                                properties: GetTerminalRefundResponseFields,
                            });
                        },
                })
                