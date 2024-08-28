
                    import { EventHandler } from '@arkw/core';
                    import { UserAssignmentsFields } from '../constants';
                    import { HarvestIntegration } from '..';

                    export const listUserAssignments: EventHandler<HarvestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-UserAssignments`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { user_id,is_active,updated_since,page,cursor,per_page,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/user_assignments'].get({
                                query: {user_id,is_active,updated_since,page,cursor,per_page,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `UserAssignments`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `UserAssignments`,
                                properties: UserAssignmentsFields,
                            });
                        },
                })
                