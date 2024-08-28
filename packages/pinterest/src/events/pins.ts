
                    import { EventHandler } from '@arkw/core';
                    import { PinFields } from '../constants';
                    import { PinterestIntegration } from '..';

                    export const pins: EventHandler<PinterestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Pin`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { path_pin_id,query_pin_metrics,query_ad_account_id,pin_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/pins/{pin_id}'].get({
                                query: {path_pin_id,query_pin_metrics,query_ad_account_id,},
                                params: {pin_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Pin`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Pin`,
                                properties: PinFields,
                            });
                        },
                })
                