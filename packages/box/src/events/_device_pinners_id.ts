
                    import { EventHandler } from '@arkw/core';
                    import { DevicePinnerFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const _device_pinners_id: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-DevicePinner`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { device_pinner_id, device_pinner_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/device_pinners/{device_pinner_id}'].get({
                                query: {device_pinner_id,},
                                params: {device_pinner_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `DevicePinner`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `DevicePinner`,
                                properties: DevicePinnerFields,
                            });
                        },
                })
                