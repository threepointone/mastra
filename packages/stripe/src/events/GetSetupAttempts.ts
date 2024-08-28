
                    import { EventHandler } from '@arkw/core';
                    import { setup_attemptFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetSetupAttempts: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-setup_attempt`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { created,ending_before,expand,limit,setup_intent,starting_after,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/setup_attempts'].get({
                                query: {created,ending_before,expand,limit,setup_intent,starting_after,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `setup_attempt`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `setup_attempt`,
                                properties: setup_attemptFields,
                            });
                        },
                })
                