
                    import { EventHandler } from '@arkw/core';
                    import { Garnishment-ListFields } from '../constants';
                    import { GustoIntegration } from '..';

                    export const -v1-employees-employee_id-garnishments: EventHandler<GustoIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-Garnishment-List`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { pageParam,perParam, employee_id_or_uuid,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v1/employees/{employee_id_or_uuid}/garnishments'].get({
                                query: {pageParam,perParam,},
                                params: {employee_id_or_uuid,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Garnishment-List`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Garnishment-List`,
                                properties: Garnishment-ListFields,
                            });
                        },
                })
                