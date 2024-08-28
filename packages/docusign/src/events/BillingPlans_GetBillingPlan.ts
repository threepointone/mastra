
                    import { EventHandler } from '@arkw/core';
                    import { billingPlanResponseFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const BillingPlans_GetBillingPlan: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-billingPlanResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { billingPlanId, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/billing_plans/{billingPlanId}'].get({
                                query: {billingPlanId,},
                                params: {billingPlanId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `billingPlanResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `billingPlanResponse`,
                                properties: billingPlanResponseFields,
                            });
                        },
                })
                