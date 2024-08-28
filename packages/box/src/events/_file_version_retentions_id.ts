
                    import { EventHandler } from '@arkw/core';
                    import { FileVersionRetentionFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const _file_version_retentions_id: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-FileVersionRetention`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { file_version_retention_id, file_version_retention_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/file_version_retentions/{file_version_retention_id}'].get({
                                query: {file_version_retention_id,},
                                params: {file_version_retention_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `FileVersionRetention`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `FileVersionRetention`,
                                properties: FileVersionRetentionFields,
                            });
                        },
                })
                