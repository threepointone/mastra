
                    import { EventHandler } from '@arkw/core';
                    import { Folder--FullFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const _shared_items#folders: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-Folder--Full`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { if-none-match,fields,boxapi,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/shared_items#folders'].get({
                                query: {if-none-match,fields,boxapi,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Folder--Full`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Folder--Full`,
                                properties: Folder--FullFields,
                            });
                        },
                })
                