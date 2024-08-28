
                    import { EventHandler } from '@arkw/core';
                    import { actions-cache-listFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const actions_actions_cache_list: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-actions-cache-list`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo,per-page,page,git-ref,actions-cache-key,actions-cache-list-sort,direction, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repos/{owner}/{repo}/actions/caches'].get({
                                query: {owner,repo,per-page,page,git-ref,actions-cache-key,actions-cache-list-sort,direction,},
                                params: {owner,repo,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `actions-cache-list`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `actions-cache-list`,
                                properties: actions-cache-listFields,
                            });
                        },
                })
                