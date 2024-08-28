
                    import { EventHandler } from '@arkw/core';
                    import { Earning-Type-ListFields } from '../constants';
                    import { GustoIntegration } from '..';

                    export const -v1-companies-company_id-earning_types: EventHandler<GustoIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Earning-Type-List`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {  company_id_or_uuid,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/companies/{company_id_or_uuid}/earning_types'].get({
                                
                                params: {company_id_or_uuid,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Earning-Type-List`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Earning-Type-List`,
                                properties: Earning-Type-ListFields,
                            });
                        },
                })
                