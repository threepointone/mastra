
                    import { EventHandler } from '@arkw/core';
                    import { TaskAssignmentsFields } from '../constants';
                    import { HarvestIntegration } from '..';

                    export const listTaskAssignments: EventHandler<HarvestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-TaskAssignments`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { is_active,updated_since,page,cursor,per_page, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/task_assignments'].get({
                                query: {is_active,updated_since,page,cursor,per_page,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `TaskAssignments`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `TaskAssignments`,
                                properties: TaskAssignmentsFields,
                            });
                        },
                })
                