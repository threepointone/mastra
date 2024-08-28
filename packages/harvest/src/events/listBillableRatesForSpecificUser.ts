
                    import { EventHandler } from '@arkw/core';
                    import { BillableRatesFields } from '../constants';
                    import { HarvestIntegration } from '..';

                    export const listBillableRatesForSpecificUser: EventHandler<HarvestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-BillableRates`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { userId,page,cursor,per_page, userId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/users/{userId}/billable_rates'].get({
                                query: {userId,page,cursor,per_page,},
                                params: {userId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `BillableRates`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `BillableRates`,
                                properties: BillableRatesFields,
                            });
                        },
                })
                