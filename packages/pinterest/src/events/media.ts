
                    import { EventHandler } from '@arkw/core';
                    import { MediaUploadDetailsFields } from '../constants';
                    import { PinterestIntegration } from '..';

                    export const media: EventHandler<PinterestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-MediaUploadDetails`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { path_media_id, media_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/media/{media_id}'].get({
                                query: {path_media_id,},
                                params: {media_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `MediaUploadDetails`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `MediaUploadDetails`,
                                properties: MediaUploadDetailsFields,
                            });
                        },
                })
                