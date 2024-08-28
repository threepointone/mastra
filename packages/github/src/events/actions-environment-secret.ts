
                    import { EventHandler } from '@arkw/core';
                    import { actions-secretFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const actions-environment-secret: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-actions-secret`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { repository-id,environment-name,secret-name, repository_id,environment_name,secret_name,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}'].get({
                                query: {repository-id,environment-name,secret-name,},
                                params: {repository_id,environment_name,secret_name,} })

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
                