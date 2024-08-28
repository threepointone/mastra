
                    import { EventHandler } from '@arkw/core';
                    import { Employee-Onboarding-Status-ObjectFields } from '../constants';
                    import { GustoIntegration } from '..';

                    export const _v1_employees_employee_id_or_uuid_onboarding_status: EventHandler<GustoIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Employee-Onboarding-Status-Object`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { employee_id_or_uuid, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/employees/{employee_id_or_uuid}/onboarding_status'].get({
                                
                                params: {employee_id_or_uuid,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Employee-Onboarding-Status-Object`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Employee-Onboarding-Status-Object`,
                                properties: Employee-Onboarding-Status-ObjectFields,
                            });
                        },
                })
                