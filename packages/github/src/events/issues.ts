
                    import { EventHandler } from '@arkw/core';
                    import { issueFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const issues: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-issue`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo,issue-number, owner,repo,issue_number,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/repos/{owner}/{repo}/issues/{issue_number}'].get({
                                query: {owner,repo,issue-number,},
                                params: {owner,repo,issue_number,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `issue`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `issue`,
                                properties: issueFields,
                            });
                        },
                })
                