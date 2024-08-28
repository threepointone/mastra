
                    import { EventHandler } from '@arkw/core';
                    import { git-refFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const git-ref: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-git-ref`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo,ref, owner,repo,ref,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repos/{owner}/{repo}/git/ref/{ref}'].get({
                                query: {owner,repo,ref,},
                                params: {owner,repo,ref,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `git-ref`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `git-ref`,
                                properties: git-refFields,
                            });
                        },
                })
                