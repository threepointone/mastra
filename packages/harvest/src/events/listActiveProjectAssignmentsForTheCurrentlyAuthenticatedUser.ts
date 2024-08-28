
                    import { EventHandler } from '@arkw/core';
                    import { ProjectAssignmentsFields } from '../constants';
                    import { HarvestIntegration } from '..';

                    export const listActiveProjectAssignmentsForTheCurrentlyAuthenticatedUser: EventHandler<HarvestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-ProjectAssignments`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { page,per_page,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/users/me/project_assignments'].get({
                                query: {page,per_page,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ProjectAssignments`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ProjectAssignments`,
                                properties: ProjectAssignmentsFields,
                            });
                        },
                })
                