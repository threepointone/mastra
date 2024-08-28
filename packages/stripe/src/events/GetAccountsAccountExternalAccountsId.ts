
                    import { EventHandler } from '@arkw/core';
                    import { external_accountFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetAccountsAccountExternalAccountsId: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-external_account`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { account,expand,id, account,id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v1/accounts/{account}/external_accounts/{id}'].get({
                                query: {account,expand,id,},
                                params: {account,id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `external_account`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `external_account`,
                                properties: external_accountFields,
                            });
                        },
                })
                