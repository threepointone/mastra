
                    import { EventHandler } from '@arkw/core';
                    import { CostRateFields } from '../constants';
                    import { HarvestIntegration } from '..';

                    export const retrieveCostRate: EventHandler<HarvestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-CostRate`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { userId,costRateId, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/users/{userId}/cost_rates/{costRateId}'].get({
                                query: {userId,costRateId,},
                                params: {userId,costRateId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `CostRate`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `CostRate`,
                                properties: CostRateFields,
                            });
                        },
                })
                