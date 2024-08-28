
                    import { EventHandler } from '@arkw/core';
                    import { repo-codespaces-secretFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const codespaces-repo-secret: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-repo-codespaces-secret`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo,secret-name, owner,repo,secret_name,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repos/{owner}/{repo}/codespaces/secrets/{secret_name}'].get({
                                query: {owner,repo,secret-name,},
                                params: {owner,repo,secret_name,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `repo-codespaces-secret`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `repo-codespaces-secret`,
                                properties: repo-codespaces-secretFields,
                            });
                        },
                })
                