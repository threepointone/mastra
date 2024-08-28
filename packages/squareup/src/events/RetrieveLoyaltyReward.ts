
                    import { EventHandler } from '@arkw/core';
                    import { RetrieveLoyaltyRewardResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const RetrieveLoyaltyReward: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-RetrieveLoyaltyRewardResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { reward_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2/loyalty/rewards/{reward_id}'].get({
                                query: {reward_id,},
                                params: {reward_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `RetrieveLoyaltyRewardResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `RetrieveLoyaltyRewardResponse`,
                                properties: RetrieveLoyaltyRewardResponseFields,
                            });
                        },
                })
                