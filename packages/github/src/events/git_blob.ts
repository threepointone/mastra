
                    import { EventHandler } from '@arkw/core';
                    import { blobFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const git_blob: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-blob`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo,file_sha, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repos/{owner}/{repo}/git/blobs/{file_sha}'].get({
                                query: {owner,repo,file_sha,},
                                params: {owner,repo,file_sha,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `blob`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `blob`,
                                properties: blobFields,
                            });
                        },
                })
                