
                    import { EventHandler } from '@arkw/core';
                    import { Employee-State-Taxes-ListFields } from '../constants';
                    import { GustoIntegration } from '..';

                    export const _v1_employees_employee_id_state_taxes: EventHandler<GustoIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Employee-State-Taxes-List`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { employee_uuid, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/employees/{employee_uuid}/state_taxes'].get({
                                
                                params: {employee_uuid,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Employee-State-Taxes-List`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Employee-State-Taxes-List`,
                                properties: Employee-State-Taxes-ListFields,
                            });
                        },
                })
                