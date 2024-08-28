
                    import { EventHandler } from '@arkw/core';
                    import { RetrieveCashDrawerShiftResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const RetrieveCashDrawerShift: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-RetrieveCashDrawerShiftResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { location_id,shift_id, shift_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2/cash-drawers/shifts/{shift_id}'].get({
                                query: {location_id,shift_id,},
                                params: {shift_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `RetrieveCashDrawerShiftResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `RetrieveCashDrawerShiftResponse`,
                                properties: RetrieveCashDrawerShiftResponseFields,
                            });
                        },
                })
                