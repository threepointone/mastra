
                    import { EventHandler } from '@arkw/core';
                    import { IssueTypesWorkflowMappingFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const getDraftWorkflow: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-IssueTypesWorkflowMapping`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { id,workflowName, id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/rest/api/3/workflowscheme/{id}/draft/workflow'].get({
                                query: {id,workflowName,},
                                params: {id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `IssueTypesWorkflowMapping`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `IssueTypesWorkflowMapping`,
                                properties: IssueTypesWorkflowMappingFields,
                            });
                        },
                })
                