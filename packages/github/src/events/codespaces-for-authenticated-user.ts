
                    import { EventHandler } from '@arkw/core';
                    import { codespaceFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const codespaces-for-authenticated-user: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-codespace`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { codespace-name, codespace_name,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/user/codespaces/{codespace_name}'].get({
                                query: {codespace-name,},
                                params: {codespace_name,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `codespace`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `codespace`,
                                properties: codespaceFields,
                            });
                        },
                })
                