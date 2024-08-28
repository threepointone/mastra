
                    import { EventHandler } from '@arkw/core';
                    import { GroupMembershipFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const get_group_memberships_id: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-GroupMembership`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { group_membership_id,fields, group_membership_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/group_memberships/{group_membership_id}'].get({
                                query: {group_membership_id,fields,},
                                params: {group_membership_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `GroupMembership`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `GroupMembership`,
                                properties: GroupMembershipFields,
                            });
                        },
                })
                