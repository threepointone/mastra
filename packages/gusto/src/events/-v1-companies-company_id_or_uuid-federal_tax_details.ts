
                    import { EventHandler } from '@arkw/core';
                    import { Federal-Tax-Details-ObjectFields } from '../constants';
                    import { GustoIntegration } from '..';

                    export const -v1-companies-company_id_or_uuid-federal_tax_details: EventHandler<GustoIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Federal-Tax-Details-Object`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {  company_id_or_uuid,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/companies/{company_id_or_uuid}/federal_tax_details'].get({
                                
                                params: {company_id_or_uuid,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Federal-Tax-Details-Object`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Federal-Tax-Details-Object`,
                                properties: Federal-Tax-Details-ObjectFields,
                            });
                        },
                })
                