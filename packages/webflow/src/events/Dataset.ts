
                    import { EventHandler } from '@arkw/core';
                    import { DatasetFields } from '../constants';
                    import { WebflowIntegration } from '..';

                    export const Dataset: EventHandler<WebflowIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Dataset`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { datasetId, datasetId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/datasets/{datasetId}'].get({
                                query: {datasetId,},
                                params: {datasetId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Dataset`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Dataset`,
                                properties: DatasetFields,
                            });
                        },
                })
                