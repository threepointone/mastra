
                    import { EventHandler } from '@arkw/core';
                    import { IssuePickerSuggestionsFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const IssuePickerResource: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-IssuePickerSuggestions`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { query,currentJQL,currentIssueKey,currentProjectId,showSubTasks,showSubTaskParent, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/issue/picker'].get({
                                query: {query,currentJQL,currentIssueKey,currentProjectId,showSubTasks,showSubTaskParent,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `IssuePickerSuggestions`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `IssuePickerSuggestions`,
                                properties: IssuePickerSuggestionsFields,
                            });
                        },
                })
                