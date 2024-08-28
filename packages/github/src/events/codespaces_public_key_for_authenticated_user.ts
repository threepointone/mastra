
                    import { EventHandler } from '@arkw/core';
                    import { codespaces-user-public-keyFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const codespaces_public_key_for_authenticated_user: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-codespaces-user-public-key`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/user/codespaces/secrets/public-key'].get({
                                
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `codespaces-user-public-key`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `codespaces-user-public-key`,
                                properties: codespaces-user-public-keyFields,
                            });
                        },
                })
                