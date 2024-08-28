
                    import { EventHandler } from '@arkw/core';
                    import { treasury.financial_account_featuresFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetTreasuryFinancialAccountsFinancialAccountFeatures: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-treasury.financial_account_features`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { expand,financial_account, financial_account,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/treasury/financial_accounts/{financial_account}/features'].get({
                                query: {expand,financial_account,},
                                params: {financial_account,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `treasury.financial_account_features`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `treasury.financial_account_features`,
                                properties: treasury.financial_account_featuresFields,
                            });
                        },
                })
                