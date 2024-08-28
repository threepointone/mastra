
                    import { EventHandler } from '@arkw/core';
                    import { invoiceFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetInvoicesUpcoming: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-invoice`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { automatic_tax,coupon,currency,customer,customer_details,discounts,expand,invoice_items,schedule,subscription,subscription_billing_cycle_anchor,subscription_cancel_at,subscription_cancel_at_period_end,subscription_cancel_now,subscription_default_tax_rates,subscription_items,subscription_proration_behavior,subscription_proration_date,subscription_resume_at,subscription_start_date,subscription_trial_end,subscription_trial_from_plan,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v1/invoices/upcoming'].get({
                                query: {automatic_tax,coupon,currency,customer,customer_details,discounts,expand,invoice_items,schedule,subscription,subscription_billing_cycle_anchor,subscription_cancel_at,subscription_cancel_at_period_end,subscription_cancel_now,subscription_default_tax_rates,subscription_items,subscription_proration_behavior,subscription_proration_date,subscription_resume_at,subscription_start_date,subscription_trial_end,subscription_trial_from_plan,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `invoice`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `invoice`,
                                properties: invoiceFields,
                            });
                        },
                })
                