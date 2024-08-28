
                    import { EventHandler } from '@arkw/core';
                    import { terminal.readerFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetTerminalReaders: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-terminal.reader`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { device_type,ending_before,expand,limit,location,starting_after,status, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/terminal/readers'].get({
                                query: {device_type,ending_before,expand,limit,location,starting_after,status,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `terminal.reader`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `terminal.reader`,
                                properties: terminal.readerFields,
                            });
                        },
                })
                