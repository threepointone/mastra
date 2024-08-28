
                    import { EventHandler } from '@arkw/core';
                    import { TrashFileFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const _files_id_trash: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-TrashFile`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { file_id,fields, file_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/files/{file_id}/trash'].get({
                                query: {file_id,fields,},
                                params: {file_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `TrashFile`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `TrashFile`,
                                properties: TrashFileFields,
                            });
                        },
                })
                