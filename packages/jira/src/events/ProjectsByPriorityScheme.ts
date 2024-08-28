
                    import { EventHandler } from '@arkw/core';
                    import { PageBeanProjectFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const ProjectsByPriorityScheme: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-PageBeanProject`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { startAt,maxResults,projectId,schemeId,query, schemeId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/priorityscheme/{schemeId}/projects'].get({
                                query: {startAt,maxResults,projectId,schemeId,query,},
                                params: {schemeId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PageBeanProject`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PageBeanProject`,
                                properties: PageBeanProjectFields,
                            });
                        },
                })
                