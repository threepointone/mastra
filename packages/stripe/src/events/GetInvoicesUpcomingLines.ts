
                    import { EventHandler } from '@arkw/core';
                    import { line_itemFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetInvoicesUpcomingLines: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-line_item`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { automatic_tax,coupon,currency,customer,customer_details,discounts,ending_before,expand,invoice_items,limit,schedule,starting_after,subscription,subscription_billing_cycle_anchor,subscription_cancel_at,subscription_cancel_at_period_end,subscription_cancel_now,subscription_default_tax_rates,subscription_items,subscription_proration_behavior,subscription_proration_date,subscription_resume_at,subscription_start_date,subscription_trial_end,subscription_trial_from_plan, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/invoices/upcoming/lines'].get({
                                query: {automatic_tax,coupon,currency,customer,customer_details,discounts,ending_before,expand,invoice_items,limit,schedule,starting_after,subscription,subscription_billing_cycle_anchor,subscription_cancel_at,subscription_cancel_at_period_end,subscription_cancel_now,subscription_default_tax_rates,subscription_items,subscription_proration_behavior,subscription_proration_date,subscription_resume_at,subscription_start_date,subscription_trial_end,subscription_trial_from_plan,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `line_item`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `line_item`,
                                properties: line_itemFields,
                            });
                        },
                })
                