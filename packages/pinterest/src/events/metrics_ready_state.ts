
                    import { EventHandler } from '@arkw/core';
                    import { BookClosedResponseFields } from '../constants';
                    import { PinterestIntegration } from '..';

                    export const metrics_ready_state: EventHandler<PinterestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-BookClosedResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { date, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/resources/metrics_ready_state'].get({
                                query: {date,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `BookClosedResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `BookClosedResponse`,
                                properties: BookClosedResponseFields,
                            });
                        },
                })
                