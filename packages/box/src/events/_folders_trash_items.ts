
                    import { EventHandler } from '@arkw/core';
                    import { ItemsFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const _folders_trash_items: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Items`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { fields,limit,offset,usemarker,marker,direction,sort, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/folders/trash/items'].get({
                                query: {fields,limit,offset,usemarker,marker,direction,sort,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Items`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Items`,
                                properties: ItemsFields,
                            });
                        },
                })
                