
                    import { EventHandler } from '@arkw/core';
                    import { SearchResultsFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const searchForIssuesUsingJql: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-SearchResults`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { jql,startAt,maxResults,validateQuery,fields,expand,properties,fieldsByKeys,failFast,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/rest/api/3/search'].get({
                                query: {jql,startAt,maxResults,validateQuery,fields,expand,properties,fieldsByKeys,failFast,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `SearchResults`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `SearchResults`,
                                properties: SearchResultsFields,
                            });
                        },
                })
                