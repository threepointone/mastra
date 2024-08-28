
                    import { EventHandler } from '@arkw/core';
                    import { ZipDownloadStatusFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const _zip_downloads_id_status: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-ZipDownloadStatus`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { zip_download_id, zip_download_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/zip_downloads/{zip_download_id}/status'].get({
                                query: {zip_download_id,},
                                params: {zip_download_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ZipDownloadStatus`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ZipDownloadStatus`,
                                properties: ZipDownloadStatusFields,
                            });
                        },
                })
                