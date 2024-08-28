
                    import { EventHandler } from '@arkw/core';
                    import { Employee-Benefit-ListFields } from '../constants';
                    import { GustoIntegration } from '..';

                    export const _v1_employees_employee_id_employee_benefits: EventHandler<GustoIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Employee-Benefit-List`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { pageParam,perParam,employee_id_or_uuid, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/employees/{employee_id_or_uuid}/employee_benefits'].get({
                                query: {pageParam,perParam,},
                                params: {employee_id_or_uuid,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Employee-Benefit-List`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Employee-Benefit-List`,
                                properties: Employee-Benefit-ListFields,
                            });
                        },
                })
                