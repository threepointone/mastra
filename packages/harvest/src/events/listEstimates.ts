
                    import { EventHandler } from '@arkw/core';
                    import { EstimatesFields } from '../constants';
                    import { HarvestIntegration } from '..';

                    export const listEstimates: EventHandler<HarvestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-Estimates`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { client_id,updated_since,from,to,state,page,per_page,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/estimates'].get({
                                query: {client_id,updated_since,from,to,state,page,per_page,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Estimates`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Estimates`,
                                properties: EstimatesFields,
                            });
                        },
                })
                