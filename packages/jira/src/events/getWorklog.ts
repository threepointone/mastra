
                    import { EventHandler } from '@arkw/core';
                    import { WorklogFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const getWorklog: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-Worklog`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { issueIdOrKey,id,expand, issueIdOrKey,id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/rest/api/3/issue/{issueIdOrKey}/worklog/{id}'].get({
                                query: {issueIdOrKey,id,expand,},
                                params: {issueIdOrKey,id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Worklog`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Worklog`,
                                properties: WorklogFields,
                            });
                        },
                })
                