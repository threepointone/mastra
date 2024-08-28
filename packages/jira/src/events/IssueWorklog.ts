
                    import { EventHandler } from '@arkw/core';
                    import { PageOfWorklogsFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const IssueWorklog: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-PageOfWorklogs`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { issueIdOrKey,startAt,maxResults,startedAfter,startedBefore,expand, issueIdOrKey,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/rest/api/3/issue/{issueIdOrKey}/worklog'].get({
                                query: {issueIdOrKey,startAt,maxResults,startedAfter,startedBefore,expand,},
                                params: {issueIdOrKey,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PageOfWorklogs`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PageOfWorklogs`,
                                properties: PageOfWorklogsFields,
                            });
                        },
                })
                