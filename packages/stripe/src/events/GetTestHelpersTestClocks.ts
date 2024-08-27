
                    import { EventHandler } from '@arkw/core';
                    import { test_helpers.test_clockFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetTestHelpersTestClocks: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-test_helpers.test_clock`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { ending_before,expand,limit,starting_after,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v1/test_helpers/test_clocks'].get({
                                query: {ending_before,expand,limit,starting_after,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `test_helpers.test_clock`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `test_helpers.test_clock`,
                                properties: test_helpers.test_clockFields,
                            });
                        },
                })
                