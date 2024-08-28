
                    import { EventHandler } from '@arkw/core';
                    import { billing_portal.configurationFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetBillingPortalConfigurations: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-billing_portal.configuration`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { active,ending_before,expand,is_default,limit,starting_after,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/billing_portal/configurations'].get({
                                query: {active,ending_before,expand,is_default,limit,starting_after,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `billing_portal.configuration`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `billing_portal.configuration`,
                                properties: billing_portal.configurationFields,
                            });
                        },
                })
                