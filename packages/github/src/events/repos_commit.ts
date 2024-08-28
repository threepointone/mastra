
                    import { EventHandler } from '@arkw/core';
                    import { commitFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const repos_commit: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-commit`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo,page,per-page,ref, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repos/{owner}/{repo}/commits/{ref}'].get({
                                query: {owner,repo,page,per-page,ref,},
                                params: {owner,repo,ref,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `commit`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `commit`,
                                properties: commitFields,
                            });
                        },
                })
                