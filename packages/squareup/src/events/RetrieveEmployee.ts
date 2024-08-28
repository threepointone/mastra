
                    import { EventHandler } from '@arkw/core';
                    import { V1EmployeeFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const RetrieveEmployee: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-V1Employee`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { employee_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/me/employees/{employee_id}'].get({
                                query: {employee_id,},
                                params: {employee_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `V1Employee`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `V1Employee`,
                                properties: V1EmployeeFields,
                            });
                        },
                })
                