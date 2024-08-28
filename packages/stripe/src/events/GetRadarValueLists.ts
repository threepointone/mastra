
                    import { EventHandler } from '@arkw/core';
                    import { radar.value_listFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetRadarValueLists: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-radar.value_list`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { alias,contains,created,ending_before,expand,limit,starting_after, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/radar/value_lists'].get({
                                query: {alias,contains,created,ending_before,expand,limit,starting_after,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `radar.value_list`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `radar.value_list`,
                                properties: radar.value_listFields,
                            });
                        },
                })
                