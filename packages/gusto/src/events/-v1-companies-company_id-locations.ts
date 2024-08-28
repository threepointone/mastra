
                    import { EventHandler } from '@arkw/core';
                    import { Location-ListFields } from '../constants';
                    import { GustoIntegration } from '..';

                    export const -v1-companies-company_id-locations: EventHandler<GustoIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-Location-List`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { pageParam,perParam, company_id_or_uuid,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v1/companies/{company_id_or_uuid}/locations'].get({
                                query: {pageParam,perParam,},
                                params: {company_id_or_uuid,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Location-List`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Location-List`,
                                properties: Location-ListFields,
                            });
                        },
                })
                