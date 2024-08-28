
                    import { EventHandler } from '@arkw/core';
                    import { Contractor-Payment-ObjectFields } from '../constants';
                    import { GustoIntegration } from '..';

                    export const _v1_companies_company_id_contractor_payment_contractor_payment: EventHandler<GustoIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Contractor-Payment-Object`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { company_id_or_uuid,contractor_payment_id_or_uuid, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/companies/{company_id_or_uuid}/contractor_payments/{contractor_payment_id_or_uuid}'].get({
                                
                                params: {company_id_or_uuid,contractor_payment_id_or_uuid,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Contractor-Payment-Object`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Contractor-Payment-Object`,
                                properties: Contractor-Payment-ObjectFields,
                            });
                        },
                })
                