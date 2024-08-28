
                    import { EventHandler } from '@arkw/core';
                    import { issuing.authorizationFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetIssuingAuthorizations: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-issuing.authorization`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { card,cardholder,created,ending_before,expand,limit,starting_after,status, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/issuing/authorizations'].get({
                                query: {card,cardholder,created,ending_before,expand,limit,starting_after,status,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `issuing.authorization`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `issuing.authorization`,
                                properties: issuing.authorizationFields,
                            });
                        },
                })
                