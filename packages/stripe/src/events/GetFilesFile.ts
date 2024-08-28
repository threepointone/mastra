
                    import { EventHandler } from '@arkw/core';
                    import { fileFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetFilesFile: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-file`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { expand,file, file,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/files/{file}'].get({
                                query: {expand,file,},
                                params: {file,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `file`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `file`,
                                properties: fileFields,
                            });
                        },
                })
                