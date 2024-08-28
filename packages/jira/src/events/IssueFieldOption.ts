
                    import { EventHandler } from '@arkw/core';
                    import { IssueFieldOptionFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const IssueFieldOption: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-IssueFieldOption`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { fieldKey,optionId, fieldKey,optionId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/rest/api/3/field/{fieldKey}/option/{optionId}'].get({
                                query: {fieldKey,optionId,},
                                params: {fieldKey,optionId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `IssueFieldOption`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `IssueFieldOption`,
                                properties: IssueFieldOptionFields,
                            });
                        },
                })
                