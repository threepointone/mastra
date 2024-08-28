
                    import { EventHandler } from '@arkw/core';
                    import { repository-subscriptionFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const activity_repo_subscription: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-repository-subscription`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repos/{owner}/{repo}/subscription'].get({
                                query: {owner,repo,},
                                params: {owner,repo,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `repository-subscription`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `repository-subscription`,
                                properties: repository-subscriptionFields,
                            });
                        },
                })
                