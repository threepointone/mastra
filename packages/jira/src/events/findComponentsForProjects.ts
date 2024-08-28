
                    import { EventHandler } from '@arkw/core';
                    import { PageBean2ComponentJsonBeanFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const findComponentsForProjects: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-PageBean2ComponentJsonBean`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { projectIdsOrKeys,startAt,maxResults,orderBy,query, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/component'].get({
                                query: {projectIdsOrKeys,startAt,maxResults,orderBy,query,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PageBean2ComponentJsonBean`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PageBean2ComponentJsonBean`,
                                properties: PageBean2ComponentJsonBeanFields,
                            });
                        },
                })
                