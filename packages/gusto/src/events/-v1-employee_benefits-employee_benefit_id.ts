
                    import { EventHandler } from '@arkw/core';
                    import { Employee-Benefit-ObjectFields } from '../constants';
                    import { GustoIntegration } from '..';

                    export const -v1-employee_benefits-employee_benefit_id: EventHandler<GustoIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Employee-Benefit-Object`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {  employee_benefit_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/employee_benefits/{employee_benefit_id}'].get({
                                
                                params: {employee_benefit_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Employee-Benefit-Object`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Employee-Benefit-Object`,
                                properties: Employee-Benefit-ObjectFields,
                            });
                        },
                })
                