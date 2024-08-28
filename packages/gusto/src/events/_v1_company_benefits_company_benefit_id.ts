
                    import { EventHandler } from '@arkw/core';
                    import { Company-Benefit-ObjectFields } from '../constants';
                    import { GustoIntegration } from '..';

                    export const _v1_company_benefits_company_benefit_id: EventHandler<GustoIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Company-Benefit-Object`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { company_benefit_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/company_benefits/{company_benefit_id}'].get({
                                
                                params: {company_benefit_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Company-Benefit-Object`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Company-Benefit-Object`,
                                properties: Company-Benefit-ObjectFields,
                            });
                        },
                })
                