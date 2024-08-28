
                    import { EventHandler } from '@arkw/core';
                    import { CollaborationsFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const _files_id_collaborations: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Collaborations`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { file_id,fields,limit,marker, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/files/{file_id}/collaborations'].get({
                                query: {file_id,fields,limit,marker,},
                                params: {file_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Collaborations`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Collaborations`,
                                properties: CollaborationsFields,
                            });
                        },
                })
                