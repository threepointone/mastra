
                    import { EventHandler } from '@arkw/core';
                    import { UserAssignmentFields } from '../constants';
                    import { HarvestIntegration } from '..';

                    export const retrieveUserAssignment: EventHandler<HarvestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-UserAssignment`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { projectId,userAssignmentId, projectId,userAssignmentId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/projects/{projectId}/user_assignments/{userAssignmentId}'].get({
                                query: {projectId,userAssignmentId,},
                                params: {projectId,userAssignmentId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `UserAssignment`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `UserAssignment`,
                                properties: UserAssignmentFields,
                            });
                        },
                })
                