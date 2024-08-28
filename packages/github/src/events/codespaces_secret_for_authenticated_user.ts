
                    import { EventHandler } from '@arkw/core';
                    import { codespaces-secretFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const codespaces_secret_for_authenticated_user: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-codespaces-secret`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { secret-name,secret_name, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/user/codespaces/secrets/{secret_name}'].get({
                                query: {secret-name,},
                                params: {secret_name,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `codespaces-secret`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `codespaces-secret`,
                                properties: codespaces-secretFields,
                            });
                        },
                })
                