
                    import { EventHandler } from '@arkw/core';
                    import { Employee-ListFields } from '../constants';
                    import { GustoIntegration } from '..';

                    export const _v1_companies_company_id_employees: EventHandler<GustoIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Employee-List`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { terminated,include,pageParam,perParam,company_id_or_uuid, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/companies/{company_id_or_uuid}/employees'].get({
                                query: {terminated,include,pageParam,perParam,},
                                params: {company_id_or_uuid,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Employee-List`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Employee-List`,
                                properties: Employee-ListFields,
                            });
                        },
                })
                