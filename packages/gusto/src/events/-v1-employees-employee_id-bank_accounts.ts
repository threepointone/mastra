
                    import { EventHandler } from '@arkw/core';
                    import { Employee-Bank-Account-ListFields } from '../constants';
                    import { GustoIntegration } from '..';

                    export const -v1-employees-employee_id-bank_accounts: EventHandler<GustoIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-Employee-Bank-Account-List`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { pageParam,perParam, employee_id_or_uuid,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v1/employees/{employee_id_or_uuid}/bank_accounts'].get({
                                query: {pageParam,perParam,},
                                params: {employee_id_or_uuid,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Employee-Bank-Account-List`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Employee-Bank-Account-List`,
                                properties: Employee-Bank-Account-ListFields,
                            });
                        },
                })
                