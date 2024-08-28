
                    import { EventHandler } from '@arkw/core';
                    import { FileVersionsFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const _files_id_versions: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-FileVersions`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { file_id,fields,limit,offset, file_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/files/{file_id}/versions'].get({
                                query: {file_id,fields,limit,offset,},
                                params: {file_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `FileVersions`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `FileVersions`,
                                properties: FileVersionsFields,
                            });
                        },
                })
                