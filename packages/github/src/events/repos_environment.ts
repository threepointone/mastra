
                    import { EventHandler } from '@arkw/core';
                    import { environmentFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const repos_environment: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-environment`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo,environment-name,environment_name, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repos/{owner}/{repo}/environments/{environment_name}'].get({
                                query: {owner,repo,environment-name,},
                                params: {owner,repo,environment_name,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `environment`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `environment`,
                                properties: environmentFields,
                            });
                        },
                })
                