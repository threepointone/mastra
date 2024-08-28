
                    import { EventHandler } from '@arkw/core';
                    import { IssueBeanFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const Issue: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-IssueBean`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { issueIdOrKey,fields,fieldsByKeys,expand,properties,updateHistory,failFast, issueIdOrKey,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/rest/api/3/issue/{issueIdOrKey}'].get({
                                query: {issueIdOrKey,fields,fieldsByKeys,expand,properties,updateHistory,failFast,},
                                params: {issueIdOrKey,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `IssueBean`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `IssueBean`,
                                properties: IssueBeanFields,
                            });
                        },
                })
                