
                    import { EventHandler } from '@arkw/core';
                    import { project-columnFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const projects-column: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-project-column`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { column-id, column_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/projects/columns/{column_id}'].get({
                                query: {column-id,},
                                params: {column_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `project-column`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `project-column`,
                                properties: project-columnFields,
                            });
                        },
                })
                