
                    import { EventHandler } from '@arkw/core';
                    import { capabilityFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetAccountsAccountCapabilitiesCapability: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-capability`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { account,capability,expand, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/accounts/{account}/capabilities/{capability}'].get({
                                query: {account,capability,expand,},
                                params: {account,capability,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `capability`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `capability`,
                                properties: capabilityFields,
                            });
                        },
                })
                