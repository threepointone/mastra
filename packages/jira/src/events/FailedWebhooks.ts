
                    import { EventHandler } from '@arkw/core';
                    import { FailedWebhooksFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const FailedWebhooks: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-FailedWebhooks`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { maxResults,after,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/webhook/failed'].get({
                                query: {maxResults,after,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `FailedWebhooks`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `FailedWebhooks`,
                                properties: FailedWebhooksFields,
                            });
                        },
                })
                