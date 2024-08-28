
                    import { EventHandler } from '@arkw/core';
                    import { SecretsFields } from '../constants';
                    import { WebflowIntegration } from '..';

                    export const Secrets: EventHandler<WebflowIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Secrets`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { nextToken,maxResults,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/secrets'].get({
                                query: {nextToken,maxResults,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Secrets`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Secrets`,
                                properties: SecretsFields,
                            });
                        },
                })
                