
                    import { EventHandler } from '@arkw/core';
                    import { billingPaymentItemFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const BillingPayments_GetPayment: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-billingPaymentItem`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,paymentId, accountId,paymentId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2.1/accounts/{accountId}/billing_payments/{paymentId}'].get({
                                query: {accountId,paymentId,},
                                params: {accountId,paymentId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `billingPaymentItem`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `billingPaymentItem`,
                                properties: billingPaymentItemFields,
                            });
                        },
                })
                