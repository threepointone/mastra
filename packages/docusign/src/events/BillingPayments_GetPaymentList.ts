
                    import { EventHandler } from '@arkw/core';
                    import { billingPaymentsResponseFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const BillingPayments_GetPaymentList: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-billingPaymentsResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,from_date,to_date, accountId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2.1/accounts/{accountId}/billing_payments'].get({
                                query: {accountId,from_date,to_date,},
                                params: {accountId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `billingPaymentsResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `billingPaymentsResponse`,
                                properties: billingPaymentsResponseFields,
                            });
                        },
                })
                