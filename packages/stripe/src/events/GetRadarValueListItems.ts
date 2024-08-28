
                    import { EventHandler } from '@arkw/core';
                    import { radar.value_list_itemFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetRadarValueListItems: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-radar.value_list_item`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { created,ending_before,expand,limit,starting_after,value,value_list,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/radar/value_list_items'].get({
                                query: {created,ending_before,expand,limit,starting_after,value,value_list,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `radar.value_list_item`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `radar.value_list_item`,
                                properties: radar.value_list_itemFields,
                            });
                        },
                })
                