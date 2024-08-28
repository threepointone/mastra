
                    import { EventHandler } from '@arkw/core';
                    import { hookFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const repos_webhook: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-hook`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo,hook-id,hook_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repos/{owner}/{repo}/hooks/{hook_id}'].get({
                                query: {owner,repo,hook-id,},
                                params: {owner,repo,hook_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `hook`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `hook`,
                                properties: hookFields,
                            });
                        },
                })
                