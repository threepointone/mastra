
                    import { EventHandler } from '@arkw/core';
                    import { Company-Benefit-ListFields } from '../constants';
                    import { GustoIntegration } from '..';

                    export const -v1-companies-company_id-company_benefits: EventHandler<GustoIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Company-Benefit-List`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {  company_id_or_uuid,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/companies/{company_id_or_uuid}/company_benefits'].get({
                                
                                params: {company_id_or_uuid,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Company-Benefit-List`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Company-Benefit-List`,
                                properties: Company-Benefit-ListFields,
                            });
                        },
                })
                