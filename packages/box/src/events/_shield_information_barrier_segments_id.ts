
                    import { EventHandler } from '@arkw/core';
                    import { ShieldInformationBarrierSegmentFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const _shield_information_barrier_segments_id: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-ShieldInformationBarrierSegment`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { shield_information_barrier_segment_id, shield_information_barrier_segment_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/shield_information_barrier_segments/{shield_information_barrier_segment_id}'].get({
                                query: {shield_information_barrier_segment_id,},
                                params: {shield_information_barrier_segment_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ShieldInformationBarrierSegment`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ShieldInformationBarrierSegment`,
                                properties: ShieldInformationBarrierSegmentFields,
                            });
                        },
                })
                