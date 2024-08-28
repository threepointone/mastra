
                    import { EventHandler } from '@arkw/core';
                    import { CostRatesFields } from '../constants';
                    import { HarvestIntegration } from '..';

                    export const listCostRatesForSpecificUser: EventHandler<HarvestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-CostRates`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { userId,page,cursor,per_page, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/users/{userId}/cost_rates'].get({
                                query: {userId,page,cursor,per_page,},
                                params: {userId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `CostRates`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `CostRates`,
                                properties: CostRatesFields,
                            });
                        },
                })
                