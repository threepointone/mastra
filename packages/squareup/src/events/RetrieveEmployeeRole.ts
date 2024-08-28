
                    import { EventHandler } from '@arkw/core';
                    import { V1EmployeeRoleFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const RetrieveEmployeeRole: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-V1EmployeeRole`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { role_id, role_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v1/me/roles/{role_id}'].get({
                                query: {role_id,},
                                params: {role_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `V1EmployeeRole`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `V1EmployeeRole`,
                                properties: V1EmployeeRoleFields,
                            });
                        },
                })
                