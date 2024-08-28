
                    import { EventHandler } from '@arkw/core';
                    import { TrainingsFields } from '../constants';
                    import { WebflowIntegration } from '..';

                    export const Trainings: EventHandler<WebflowIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Trainings`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { modelId,status,nextToken,maxResults, modelId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/models/{modelId}/trainings'].get({
                                query: {modelId,status,nextToken,maxResults,},
                                params: {modelId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Trainings`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Trainings`,
                                properties: TrainingsFields,
                            });
                        },
                })
                