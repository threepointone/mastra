
                    import { EventHandler } from '@arkw/core';
                    import { IssueLinkFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const IssueLink: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-IssueLink`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { linkId, linkId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/rest/api/3/issueLink/{linkId}'].get({
                                query: {linkId,},
                                params: {linkId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `IssueLink`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `IssueLink`,
                                properties: IssueLinkFields,
                            });
                        },
                })
                