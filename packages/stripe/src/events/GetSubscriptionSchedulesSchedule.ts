
                    import { EventHandler } from '@arkw/core';
                    import { subscription_scheduleFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetSubscriptionSchedulesSchedule: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-subscription_schedule`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { expand,schedule, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/subscription_schedules/{schedule}'].get({
                                query: {expand,schedule,},
                                params: {schedule,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `subscription_schedule`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `subscription_schedule`,
                                properties: subscription_scheduleFields,
                            });
                        },
                })
                