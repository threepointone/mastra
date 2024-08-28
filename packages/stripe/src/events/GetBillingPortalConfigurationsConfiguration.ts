
                    import { EventHandler } from '@arkw/core';
                    import { billing_portal.configurationFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetBillingPortalConfigurationsConfiguration: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-billing_portal.configuration`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { configuration,expand, configuration,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/billing_portal/configurations/{configuration}'].get({
                                query: {configuration,expand,},
                                params: {configuration,} })

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
                