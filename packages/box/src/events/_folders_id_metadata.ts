
                    import { EventHandler } from '@arkw/core';
                    import { MetadatasFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const _folders_id_metadata: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-Metadatas`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { folder_id, folder_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/folders/{folder_id}/metadata'].get({
                                query: {folder_id,},
                                params: {folder_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Metadatas`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Metadatas`,
                                properties: MetadatasFields,
                            });
                        },
                })
                