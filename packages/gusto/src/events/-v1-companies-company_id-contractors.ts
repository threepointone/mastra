
                    import { EventHandler } from '@arkw/core';
                    import { Contractor-ListFields } from '../constants';
                    import { GustoIntegration } from '..';

                    export const -v1-companies-company_id-contractors: EventHandler<GustoIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-Contractor-List`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { pageParam,perParam, company_id_or_uuid,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v1/companies/{company_id_or_uuid}/contractors'].get({
                                query: {pageParam,perParam,},
                                params: {company_id_or_uuid,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Contractor-List`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Contractor-List`,
                                properties: Contractor-ListFields,
                            });
                        },
                })
                