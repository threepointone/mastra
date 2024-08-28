
                    import { EventHandler } from '@arkw/core';
                    import { Employee-ObjectFields } from '../constants';
                    import { GustoIntegration } from '..';

                    export const -v1-employees: EventHandler<GustoIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Employee-Object`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { include, employee_id_or_uuid,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/employees/{employee_id_or_uuid}'].get({
                                query: {include,},
                                params: {employee_id_or_uuid,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Employee-Object`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Employee-Object`,
                                properties: Employee-ObjectFields,
                            });
                        },
                })
                