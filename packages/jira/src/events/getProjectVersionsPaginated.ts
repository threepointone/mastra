
                    import { EventHandler } from '@arkw/core';
                    import { PageBeanVersionFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const getProjectVersionsPaginated: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-PageBeanVersion`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { projectIdOrKey,startAt,maxResults,orderBy,query,status,expand, projectIdOrKey,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/rest/api/3/project/{projectIdOrKey}/version'].get({
                                query: {projectIdOrKey,startAt,maxResults,orderBy,query,status,expand,},
                                params: {projectIdOrKey,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PageBeanVersion`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PageBeanVersion`,
                                properties: PageBeanVersionFields,
                            });
                        },
                })
                