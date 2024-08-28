
                    import { EventHandler } from '@arkw/core';
                    import { PageBeanIssueTypeSchemeFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const AllIssueTypeSchemes: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-PageBeanIssueTypeScheme`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { startAt,maxResults,id,orderBy,expand,queryString, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/issuetypescheme'].get({
                                query: {startAt,maxResults,id,orderBy,expand,queryString,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PageBeanIssueTypeScheme`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PageBeanIssueTypeScheme`,
                                properties: PageBeanIssueTypeSchemeFields,
                            });
                        },
                })
                