
                    import { EventHandler } from '@arkw/core';
                    import { financial_connections.accountFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetLinkedAccounts: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-financial_connections.account`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { account_holder,ending_before,expand,limit,session,starting_after,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v1/linked_accounts'].get({
                                query: {account_holder,ending_before,expand,limit,session,starting_after,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `financial_connections.account`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `financial_connections.account`,
                                properties: financial_connections.accountFields,
                            });
                        },
                })
                