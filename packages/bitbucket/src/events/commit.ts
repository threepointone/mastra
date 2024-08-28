
                    import { EventHandler } from '@arkw/core';
                    import { commitFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const commit: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-commit`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { workspace,repo_slug,revspec, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repositories/{workspace}/{repo_slug}/merge-base/{revspec}'].get({
                                
                                params: {workspace,repo_slug,revspec,} })

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
                