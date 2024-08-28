
                    import { EventHandler } from '@arkw/core';
                    import { releaseFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const repos_release: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-release`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo,release-id,release_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repos/{owner}/{repo}/releases/{release_id}'].get({
                                query: {owner,repo,release-id,},
                                params: {owner,repo,release_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `release`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `release`,
                                properties: releaseFields,
                            });
                        },
                })
                