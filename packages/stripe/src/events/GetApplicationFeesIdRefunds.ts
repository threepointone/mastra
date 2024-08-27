
                    import { EventHandler } from '@arkw/core';
                    import { fee_refundFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetApplicationFeesIdRefunds: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-fee_refund`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })
                            const response = await proxy['/v1/application_fees/{id}/refunds'].get()

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `fee_refund`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `fee_refund`,
                                properties: fee_refundFields,
                            });
                        },
                })
                