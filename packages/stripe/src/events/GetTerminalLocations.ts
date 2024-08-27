
                    import { EventHandler } from '@arkw/core';
                    import { terminal.locationFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetTerminalLocations: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-terminal.location`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { ending_before,expand,limit,starting_after,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v1/terminal/locations'].get({
                                query: {ending_before,expand,limit,starting_after,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `terminal.location`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `terminal.location`,
                                properties: terminal.locationFields,
                            });
                        },
                })
                