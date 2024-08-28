
                    import { EventHandler } from '@arkw/core';
                    import { bank_accountFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetCustomersCustomerBankAccountsId: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-bank_account`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { customer,expand,id, customer,id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/customers/{customer}/bank_accounts/{id}'].get({
                                query: {customer,expand,id,},
                                params: {customer,id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `bank_account`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `bank_account`,
                                properties: bank_accountFields,
                            });
                        },
                })
                