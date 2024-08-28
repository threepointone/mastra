
                    import { EventHandler } from '@arkw/core';
                    import { ProjectsFields } from '../constants';
                    import { HarvestIntegration } from '..';

                    export const listProjects: EventHandler<HarvestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-Projects`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { is_active,client_id,updated_since,page,cursor,per_page,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/projects'].get({
                                query: {is_active,client_id,updated_since,page,cursor,per_page,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Projects`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Projects`,
                                properties: ProjectsFields,
                            });
                        },
                })
                