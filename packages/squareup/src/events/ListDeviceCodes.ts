
                    import { EventHandler } from '@arkw/core';
                    import { ListDeviceCodesResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const ListDeviceCodes: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-ListDeviceCodesResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { cursor,location_id,product_type,status,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2/devices/codes'].get({
                                query: {cursor,location_id,product_type,status,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ListDeviceCodesResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ListDeviceCodesResponse`,
                                properties: ListDeviceCodesResponseFields,
                            });
                        },
                })
                