
                    import { EventHandler } from '@arkw/core';
                    import { Payment-Configs-ObjectFields } from '../constants';
                    import { GustoIntegration } from '..';

                    export const -v1-company-payment-configs: EventHandler<GustoIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Payment-Configs-Object`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {  company_uuid,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/companies/{company_uuid}/payment_configs'].get({
                                
                                params: {company_uuid,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Payment-Configs-Object`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Payment-Configs-Object`,
                                properties: Payment-Configs-ObjectFields,
                            });
                        },
                })
                