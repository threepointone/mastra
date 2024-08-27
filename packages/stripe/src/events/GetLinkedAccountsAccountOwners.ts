
                    import { EventHandler } from '@arkw/core';
                    import { financial_connections.account_ownerFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetLinkedAccountsAccountOwners: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-financial_connections.account_owner`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { account,ending_before,expand,limit,ownership,starting_after, account,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v1/linked_accounts/{account}/owners'].get({
                                query: {account,ending_before,expand,limit,ownership,starting_after,},
                                params: {account,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `financial_connections.account_owner`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `financial_connections.account_owner`,
                                properties: financial_connections.account_ownerFields,
                            });
                        },
                })
                