
                    import { EventHandler } from '@arkw/core';
                    import { Location-ObjectFields } from '../constants';
                    import { GustoIntegration } from '..';

                    export const _v1_locations_location_id: EventHandler<GustoIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Location-Object`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { location_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/locations/{location_id}'].get({
                                
                                params: {location_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Location-Object`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Location-Object`,
                                properties: Location-ObjectFields,
                            });
                        },
                })
                