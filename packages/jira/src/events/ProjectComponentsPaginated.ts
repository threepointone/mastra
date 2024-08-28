
                    import { EventHandler } from '@arkw/core';
                    import { PageBeanComponentWithIssueCountFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const ProjectComponentsPaginated: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-PageBeanComponentWithIssueCount`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { projectIdOrKey,startAt,maxResults,orderBy,componentSource,query, projectIdOrKey,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/project/{projectIdOrKey}/component'].get({
                                query: {projectIdOrKey,startAt,maxResults,orderBy,componentSource,query,},
                                params: {projectIdOrKey,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PageBeanComponentWithIssueCount`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PageBeanComponentWithIssueCount`,
                                properties: PageBeanComponentWithIssueCountFields,
                            });
                        },
                })
                