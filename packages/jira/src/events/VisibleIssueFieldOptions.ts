
                    import { EventHandler } from '@arkw/core';
                    import { PageBeanIssueFieldOptionFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const VisibleIssueFieldOptions: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-PageBeanIssueFieldOption`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { startAt,maxResults,projectId,fieldKey, fieldKey,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/field/{fieldKey}/option/suggestions/search'].get({
                                query: {startAt,maxResults,projectId,fieldKey,},
                                params: {fieldKey,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PageBeanIssueFieldOption`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PageBeanIssueFieldOption`,
                                properties: PageBeanIssueFieldOptionFields,
                            });
                        },
                })
                