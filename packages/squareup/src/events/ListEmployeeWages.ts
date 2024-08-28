
                    import { EventHandler } from '@arkw/core';
                    import { ListEmployeeWagesResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const ListEmployeeWages: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-ListEmployeeWagesResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { employee_id,limit,cursor,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2/labor/employee-wages'].get({
                                query: {employee_id,limit,cursor,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ListEmployeeWagesResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ListEmployeeWagesResponse`,
                                properties: ListEmployeeWagesResponseFields,
                            });
                        },
                })
                