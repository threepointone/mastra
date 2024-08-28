
                    import { EventHandler } from '@arkw/core';
                    import { RemoteIssueLinkFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const RemoteIssueLinks: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-RemoteIssueLink`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { issueIdOrKey,globalId, issueIdOrKey,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/rest/api/3/issue/{issueIdOrKey}/remotelink'].get({
                                query: {issueIdOrKey,globalId,},
                                params: {issueIdOrKey,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `RemoteIssueLink`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `RemoteIssueLink`,
                                properties: RemoteIssueLinkFields,
                            });
                        },
                })
                