
                    import { EventHandler } from '@arkw/core';
                    import { PageBeanPrioritySchemeWithPaginatedPrioritiesAndProjectsFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const PrioritySchemes: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-PageBeanPrioritySchemeWithPaginatedPrioritiesAndProjects`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { startAt,maxResults,priorityId,schemeId,schemeName,onlyDefault,orderBy,expand,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/priorityscheme'].get({
                                query: {startAt,maxResults,priorityId,schemeId,schemeName,onlyDefault,orderBy,expand,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PageBeanPrioritySchemeWithPaginatedPrioritiesAndProjects`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PageBeanPrioritySchemeWithPaginatedPrioritiesAndProjects`,
                                properties: PageBeanPrioritySchemeWithPaginatedPrioritiesAndProjectsFields,
                            });
                        },
                })
                