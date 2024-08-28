
                    import { EventHandler } from '@arkw/core';
                    import { terminal.configurationFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetTerminalConfigurations: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-terminal.configuration`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { ending_before,expand,is_account_default,limit,starting_after,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/terminal/configurations'].get({
                                query: {ending_before,expand,is_account_default,limit,starting_after,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `terminal.configuration`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `terminal.configuration`,
                                properties: terminal.configurationFields,
                            });
                        },
                })
                