
                    import { EventHandler } from '@arkw/core';
                    import { ShieldInformationBarrierSegmentMemberFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const _shield_information_barrier_segment_members_id: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-ShieldInformationBarrierSegmentMember`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { shield_information_barrier_segment_member_id, shield_information_barrier_segment_member_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/shield_information_barrier_segment_members/{shield_information_barrier_segment_member_id}'].get({
                                query: {shield_information_barrier_segment_member_id,},
                                params: {shield_information_barrier_segment_member_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ShieldInformationBarrierSegmentMember`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ShieldInformationBarrierSegmentMember`,
                                properties: ShieldInformationBarrierSegmentMemberFields,
                            });
                        },
                })
                