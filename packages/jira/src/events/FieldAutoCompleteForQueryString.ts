
                    import { EventHandler } from '@arkw/core';
                    import { AutoCompleteSuggestionsFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const FieldAutoCompleteForQueryString: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-AutoCompleteSuggestions`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { fieldName,fieldValue,predicateName,predicateValue,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/jql/autocompletedata/suggestions'].get({
                                query: {fieldName,fieldValue,predicateName,predicateValue,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `AutoCompleteSuggestions`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `AutoCompleteSuggestions`,
                                properties: AutoCompleteSuggestionsFields,
                            });
                        },
                })
                