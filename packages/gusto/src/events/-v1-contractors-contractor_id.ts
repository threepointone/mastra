
                    import { EventHandler } from '@arkw/core';
                    import { Contractor-ObjectFields } from '../constants';
                    import { GustoIntegration } from '..';

                    export const -v1-contractors-contractor_id: EventHandler<GustoIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-Contractor-Object`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {  contractor_id_or_uuid,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v1/contractors/{contractor_id_or_uuid}'].get({
                                
                                params: {contractor_id_or_uuid,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Contractor-Object`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Contractor-Object`,
                                properties: Contractor-ObjectFields,
                            });
                        },
                })
                