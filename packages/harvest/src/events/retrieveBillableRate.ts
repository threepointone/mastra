
                    import { EventHandler } from '@arkw/core';
                    import { BillableRateFields } from '../constants';
                    import { HarvestIntegration } from '..';

                    export const retrieveBillableRate: EventHandler<HarvestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-BillableRate`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { userId,billableRateId, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/users/{userId}/billable_rates/{billableRateId}'].get({
                                query: {userId,billableRateId,},
                                params: {userId,billableRateId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `BillableRate`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `BillableRate`,
                                properties: BillableRateFields,
                            });
                        },
                })
                