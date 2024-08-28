
                    import { EventHandler } from '@arkw/core';
                    import { ProjectAssignmentsFields } from '../constants';
                    import { HarvestIntegration } from '..';

                    export const listActiveProjectAssignments: EventHandler<HarvestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-ProjectAssignments`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { userId,updated_since,page,cursor,per_page, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/users/{userId}/project_assignments'].get({
                                query: {userId,updated_since,page,cursor,per_page,},
                                params: {userId,} })

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
                