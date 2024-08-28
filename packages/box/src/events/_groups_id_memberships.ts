
                    import { EventHandler } from '@arkw/core';
                    import { GroupMembershipsFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const _groups_id_memberships: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-GroupMemberships`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { group_id,limit,offset, group_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/groups/{group_id}/memberships'].get({
                                query: {group_id,limit,offset,},
                                params: {group_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `GroupMemberships`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `GroupMemberships`,
                                properties: GroupMembershipsFields,
                            });
                        },
                })
                