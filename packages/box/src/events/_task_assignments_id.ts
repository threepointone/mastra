
                    import { EventHandler } from '@arkw/core';
                    import { TaskAssignmentFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const _task_assignments_id: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-TaskAssignment`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { task_assignment_id, task_assignment_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/task_assignments/{task_assignment_id}'].get({
                                query: {task_assignment_id,},
                                params: {task_assignment_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `TaskAssignment`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `TaskAssignment`,
                                properties: TaskAssignmentFields,
                            });
                        },
                })
                