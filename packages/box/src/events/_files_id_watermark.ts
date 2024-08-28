
                    import { EventHandler } from '@arkw/core';
                    import { WatermarkFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const _files_id_watermark: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-Watermark`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { file_id, file_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/files/{file_id}/watermark'].get({
                                query: {file_id,},
                                params: {file_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Watermark`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Watermark`,
                                properties: WatermarkFields,
                            });
                        },
                })
                