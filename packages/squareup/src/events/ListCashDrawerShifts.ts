
                    import { EventHandler } from '@arkw/core';
                    import { ListCashDrawerShiftsResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const ListCashDrawerShifts: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-ListCashDrawerShiftsResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { location_id,sort_order,begin_time,end_time,limit,cursor,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2/cash-drawers/shifts'].get({
                                query: {location_id,sort_order,begin_time,end_time,limit,cursor,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ListCashDrawerShiftsResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ListCashDrawerShiftsResponse`,
                                properties: ListCashDrawerShiftsResponseFields,
                            });
                        },
                })
                