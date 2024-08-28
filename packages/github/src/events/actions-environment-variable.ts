
                    import { EventHandler } from '@arkw/core';
                    import { actions-variableFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const actions-environment-variable: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-actions-variable`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { repository-id,environment-name,variable-name, repository_id,environment_name,name,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repositories/{repository_id}/environments/{environment_name}/variables/{name}'].get({
                                query: {repository-id,environment-name,variable-name,},
                                params: {repository_id,environment_name,name,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `actions-variable`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `actions-variable`,
                                properties: actions-variableFields,
                            });
                        },
                })
                