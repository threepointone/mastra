
                    import { EventHandler } from '@arkw/core';
                    import { Payroll-ObjectFields } from '../constants';
                    import { GustoIntegration } from '..';

                    export const -v1-companies-company_id-payrolls-payroll_id: EventHandler<GustoIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Payroll-Object`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { include,show_calculation, company_id_or_uuid,payroll_id_or_uuid,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/companies/{company_id_or_uuid}/payrolls/{payroll_id_or_uuid}'].get({
                                query: {include,show_calculation,},
                                params: {company_id_or_uuid,payroll_id_or_uuid,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Payroll-Object`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Payroll-Object`,
                                properties: Payroll-ObjectFields,
                            });
                        },
                })
                