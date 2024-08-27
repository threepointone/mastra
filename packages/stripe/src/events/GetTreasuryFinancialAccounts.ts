
                    import { EventHandler } from '@arkw/core';
                    import { treasury.financial_accountFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetTreasuryFinancialAccounts: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-treasury.financial_account`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { created,ending_before,expand,limit,starting_after,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v1/treasury/financial_accounts'].get({
                                query: {created,ending_before,expand,limit,starting_after,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `treasury.financial_account`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `treasury.financial_account`,
                                properties: treasury.financial_accountFields,
                            });
                        },
                })
                