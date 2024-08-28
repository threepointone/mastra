
                    import { EventHandler } from '@arkw/core';
                    import { Garnishment-ObjectFields } from '../constants';
                    import { GustoIntegration } from '..';

                    export const -v1-garnishments-garnishment_id: EventHandler<GustoIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-Garnishment-Object`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {  garnishment_id_or_uuid,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v1/garnishments/{garnishment_id_or_uuid}'].get({
                                
                                params: {garnishment_id_or_uuid,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Garnishment-Object`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Garnishment-Object`,
                                properties: Garnishment-ObjectFields,
                            });
                        },
                })
                