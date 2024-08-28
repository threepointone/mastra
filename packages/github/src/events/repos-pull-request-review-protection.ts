
                    import { EventHandler } from '@arkw/core';
                    import { protected-branch-pull-request-reviewFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const repos-pull-request-review-protection: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-protected-branch-pull-request-review`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo,branch, owner,repo,branch,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews'].get({
                                query: {owner,repo,branch,},
                                params: {owner,repo,branch,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `protected-branch-pull-request-review`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `protected-branch-pull-request-review`,
                                properties: protected-branch-pull-request-reviewFields,
                            });
                        },
                })
                