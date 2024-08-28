
                    import { EventHandler } from '@arkw/core';
                    import { accountBillingPlanResponseFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const BillingPlan_GetBillingPlan: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-accountBillingPlanResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,include_credit_card_information,include_downgrade_information,include_metadata,include_successor_plans,include_tax_exempt_id, accountId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/billing_plan'].get({
                                query: {accountId,include_credit_card_information,include_downgrade_information,include_metadata,include_successor_plans,include_tax_exempt_id,},
                                params: {accountId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `accountBillingPlanResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `accountBillingPlanResponse`,
                                properties: accountBillingPlanResponseFields,
                            });
                        },
                })
                