
                    import { EventHandler } from '@arkw/core';
                    import { ModelsFields } from '../constants';
                    import { WebflowIntegration } from '..';

                    export const Models: EventHandler<WebflowIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Models`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,nextToken,maxResults, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/models'].get({
                                query: {owner,nextToken,maxResults,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Models`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Models`,
                                properties: ModelsFields,
                            });
                        },
                })
                