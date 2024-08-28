
                    import { EventHandler } from '@arkw/core';
                    import { Company-Onboarding-Status-ObjectFields } from '../constants';
                    import { GustoIntegration } from '..';

                    export const -v1-company-onboarding-status: EventHandler<GustoIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-Company-Onboarding-Status-Object`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {  company_uuid,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v1/companies/{company_uuid}/onboarding_status'].get({
                                
                                params: {company_uuid,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Company-Onboarding-Status-Object`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Company-Onboarding-Status-Object`,
                                properties: Company-Onboarding-Status-ObjectFields,
                            });
                        },
                })
                