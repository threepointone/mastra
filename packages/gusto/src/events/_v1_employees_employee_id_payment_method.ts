
                    import { EventHandler } from '@arkw/core';
                    import { Employee-Payment-Method-ObjectFields } from '../constants';
                    import { GustoIntegration } from '..';

                    export const _v1_employees_employee_id_payment_method: EventHandler<GustoIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Employee-Payment-Method-Object`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { employee_id_or_uuid, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/employees/{employee_id_or_uuid}/payment_method'].get({
                                
                                params: {employee_id_or_uuid,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Employee-Payment-Method-Object`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Employee-Payment-Method-Object`,
                                properties: Employee-Payment-Method-ObjectFields,
                            });
                        },
                })
                