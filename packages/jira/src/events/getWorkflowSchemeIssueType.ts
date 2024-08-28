
                    import { EventHandler } from '@arkw/core';
                    import { IssueTypeWorkflowMappingFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const getWorkflowSchemeIssueType: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-IssueTypeWorkflowMapping`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { id,issueType,returnDraftIfExists, id,issueType,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/rest/api/3/workflowscheme/{id}/issuetype/{issueType}'].get({
                                query: {id,issueType,returnDraftIfExists,},
                                params: {id,issueType,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `IssueTypeWorkflowMapping`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `IssueTypeWorkflowMapping`,
                                properties: IssueTypeWorkflowMappingFields,
                            });
                        },
                })
                