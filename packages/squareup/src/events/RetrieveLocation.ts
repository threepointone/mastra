
                    import { EventHandler } from '@arkw/core';
                    import { RetrieveLocationResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const RetrieveLocation: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-RetrieveLocationResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { location_id, location_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2/locations/{location_id}'].get({
                                query: {location_id,},
                                params: {location_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `RetrieveLocationResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `RetrieveLocationResponse`,
                                properties: RetrieveLocationResponseFields,
                            });
                        },
                })
                