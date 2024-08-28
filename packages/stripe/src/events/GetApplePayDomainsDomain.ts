
                    import { EventHandler } from '@arkw/core';
                    import { apple_pay_domainFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetApplePayDomainsDomain: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-apple_pay_domain`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { domain,expand, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/apple_pay/domains/{domain}'].get({
                                query: {domain,expand,},
                                params: {domain,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `apple_pay_domain`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `apple_pay_domain`,
                                properties: apple_pay_domainFields,
                            });
                        },
                })
                