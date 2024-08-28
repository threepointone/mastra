
                    import { EventHandler } from '@arkw/core';
                    import { ListBreakTypesResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const ListBreakTypes: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-ListBreakTypesResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { location_id,limit,cursor,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2/labor/break-types'].get({
                                query: {location_id,limit,cursor,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ListBreakTypesResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ListBreakTypesResponse`,
                                properties: ListBreakTypesResponseFields,
                            });
                        },
                })
                