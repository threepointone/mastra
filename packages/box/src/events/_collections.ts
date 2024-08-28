
                    import { EventHandler } from '@arkw/core';
                    import { CollectionsFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const _collections: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Collections`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { fields,offset,limit,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/collections'].get({
                                query: {fields,offset,limit,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Collections`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Collections`,
                                properties: CollectionsFields,
                            });
                        },
                })
                