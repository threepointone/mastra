
                    import { EventHandler } from '@arkw/core';
                    import { ModelFields } from '../constants';
                    import { WebflowIntegration } from '..';

                    export const Model: EventHandler<WebflowIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Model`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { modelId, modelId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/models/{modelId}'].get({
                                query: {modelId,},
                                params: {modelId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Model`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Model`,
                                properties: ModelFields,
                            });
                        },
                })
                