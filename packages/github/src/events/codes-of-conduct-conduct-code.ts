
                    import { EventHandler } from '@arkw/core';
                    import { code-of-conductFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const codes-of-conduct-conduct-code: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-code-of-conduct`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { key, key,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/codes_of_conduct/{key}'].get({
                                query: {key,},
                                params: {key,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `code-of-conduct`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `code-of-conduct`,
                                properties: code-of-conductFields,
                            });
                        },
                })
                