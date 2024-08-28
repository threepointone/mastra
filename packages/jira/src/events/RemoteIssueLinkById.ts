
                    import { EventHandler } from '@arkw/core';
                    import { RemoteIssueLinkFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const RemoteIssueLinkById: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-RemoteIssueLink`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { issueIdOrKey,linkId, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/issue/{issueIdOrKey}/remotelink/{linkId}'].get({
                                query: {issueIdOrKey,linkId,},
                                params: {issueIdOrKey,linkId,} })

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
                