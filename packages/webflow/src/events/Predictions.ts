
                    import { EventHandler } from '@arkw/core';
                    import { PredictionsFields } from '../constants';
                    import { WebflowIntegration } from '..';

                    export const Predictions: EventHandler<WebflowIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Predictions`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { nextToken,maxResults,sortBy,order,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/predictions'].get({
                                query: {nextToken,maxResults,sortBy,order,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Predictions`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Predictions`,
                                properties: PredictionsFields,
                            });
                        },
                })
                