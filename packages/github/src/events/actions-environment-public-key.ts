
                    import { EventHandler } from '@arkw/core';
                    import { actions-public-keyFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const actions-environment-public-key: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-actions-public-key`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { repository-id,environment-name, repository_id,environment_name,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repositories/{repository_id}/environments/{environment_name}/secrets/public-key'].get({
                                query: {repository-id,environment-name,},
                                params: {repository_id,environment_name,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `actions-public-key`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `actions-public-key`,
                                properties: actions-public-keyFields,
                            });
                        },
                })
                