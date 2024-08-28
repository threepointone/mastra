
                    import { EventHandler } from '@arkw/core';
                    import { selected-actionsFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const actions_allowed_actions_repository: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-selected-actions`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repos/{owner}/{repo}/actions/permissions/selected-actions'].get({
                                query: {owner,repo,},
                                params: {owner,repo,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `selected-actions`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `selected-actions`,
                                properties: selected-actionsFields,
                            });
                        },
                })
                