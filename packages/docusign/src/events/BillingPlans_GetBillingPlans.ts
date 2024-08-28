
                    import { EventHandler } from '@arkw/core';
                    import { billingPlansResponseFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const BillingPlans_GetBillingPlans: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-billingPlansResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/billing_plans'].get({
                                
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `billingPlansResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `billingPlansResponse`,
                                properties: billingPlansResponseFields,
                            });
                        },
                })
                