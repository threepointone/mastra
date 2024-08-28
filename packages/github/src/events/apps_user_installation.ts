
                    import { EventHandler } from '@arkw/core';
                    import { installationFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const apps_user_installation: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-installation`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { username, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/users/{username}/installation'].get({
                                query: {username,},
                                params: {username,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `installation`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `installation`,
                                properties: installationFields,
                            });
                        },
                })
                