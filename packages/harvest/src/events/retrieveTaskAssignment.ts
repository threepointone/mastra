
                    import { EventHandler } from '@arkw/core';
                    import { TaskAssignmentFields } from '../constants';
                    import { HarvestIntegration } from '..';

                    export const retrieveTaskAssignment: EventHandler<HarvestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-TaskAssignment`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { projectId,taskAssignmentId, projectId,taskAssignmentId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/projects/{projectId}/task_assignments/{taskAssignmentId}'].get({
                                query: {projectId,taskAssignmentId,},
                                params: {projectId,taskAssignmentId,} })

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
                