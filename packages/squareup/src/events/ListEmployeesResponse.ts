
                    import { EventHandler } from '@arkw/core';
                    import { ListEmployeesResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const ListEmployeesResponse: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-ListEmployeesResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { location_id,status,limit,cursor, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2/employees'].get({
                                query: {location_id,status,limit,cursor,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ListEmployeesResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ListEmployeesResponse`,
                                properties: ListEmployeesResponseFields,
                            });
                        },
                })
                