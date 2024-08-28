
                    import { EventHandler } from '@arkw/core';
                    import { branch-with-protectionFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const repos_branch: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-branch-with-protection`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo,branch, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repos/{owner}/{repo}/branches/{branch}'].get({
                                query: {owner,repo,branch,},
                                params: {owner,repo,branch,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `branch-with-protection`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `branch-with-protection`,
                                properties: branch-with-protectionFields,
                            });
                        },
                })
                