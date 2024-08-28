
                    import { EventHandler } from '@arkw/core';
                    import { info_objectFields } from '../constants';
                    import { StackexchangeIntegration } from '..';

                    export const info_object: EventHandler<StackexchangeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-info_object`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { site,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/info'].get({
                                query: {site,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `info_object`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `info_object`,
                                properties: info_objectFields,
                            });
                        },
                })
                