
                    import { EventHandler } from '@arkw/core';
                    import { Contractor-PaymentsFields } from '../constants';
                    import { GustoIntegration } from '..';

                    export const -v1-companies-company_id-contractor_payments: EventHandler<GustoIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-Contractor-Payments`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { start_date,end_date,pageParam,perParam, company_id_or_uuid,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v1/companies/{company_id_or_uuid}/contractor_payments'].get({
                                query: {start_date,end_date,pageParam,perParam,},
                                params: {company_id_or_uuid,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Contractor-Payments`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Contractor-Payments`,
                                properties: Contractor-PaymentsFields,
                            });
                        },
                })
                