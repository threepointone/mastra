
                    import { EventHandler } from '@arkw/core';
                    import { ShieldInformationBarrierFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const _shield_information_barriers_id: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-ShieldInformationBarrier`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { shield_information_barrier_id, shield_information_barrier_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/shield_information_barriers/{shield_information_barrier_id}'].get({
                                query: {shield_information_barrier_id,},
                                params: {shield_information_barrier_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ShieldInformationBarrier`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ShieldInformationBarrier`,
                                properties: ShieldInformationBarrierFields,
                            });
                        },
                })
                