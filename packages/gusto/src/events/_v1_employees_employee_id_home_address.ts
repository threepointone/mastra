
                    import { EventHandler } from '@arkw/core';
                    import { Location-ObjectFields } from '../constants';
                    import { GustoIntegration } from '..';

                    export const _v1_employees_employee_id_home_address: EventHandler<GustoIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Location-Object`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { employee_id_or_uuid, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/employees/{employee_id_or_uuid}/home_address'].get({
                                
                                params: {employee_id_or_uuid,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Location-Object`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Location-Object`,
                                properties: Location-ObjectFields,
                            });
                        },
                })
                