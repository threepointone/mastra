
                    import { EventHandler } from '@arkw/core';
                    import { actions-secretFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const actions-repo-secret: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-actions-secret`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo,secret-name, owner,repo,secret_name,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repos/{owner}/{repo}/actions/secrets/{secret_name}'].get({
                                query: {owner,repo,secret-name,},
                                params: {owner,repo,secret_name,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `actions-secret`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `actions-secret`,
                                properties: actions-secretFields,
                            });
                        },
                })
                