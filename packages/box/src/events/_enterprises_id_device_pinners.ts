
                    import { EventHandler } from '@arkw/core';
                    import { DevicePinnersFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const _enterprises_id_device_pinners: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-DevicePinners`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { enterprise_id,marker,limit,direction, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/enterprises/{enterprise_id}/device_pinners'].get({
                                query: {enterprise_id,marker,limit,direction,},
                                params: {enterprise_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `DevicePinners`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `DevicePinners`,
                                properties: DevicePinnersFields,
                            });
                        },
                })
                