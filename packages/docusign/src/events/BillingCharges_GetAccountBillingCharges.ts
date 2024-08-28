
                    import { EventHandler } from '@arkw/core';
                    import { billingChargeResponseFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const BillingCharges_GetAccountBillingCharges: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-billingChargeResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,include_charges, accountId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/billing_charges'].get({
                                query: {accountId,include_charges,},
                                params: {accountId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `billingChargeResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `billingChargeResponse`,
                                properties: billingChargeResponseFields,
                            });
                        },
                })
                