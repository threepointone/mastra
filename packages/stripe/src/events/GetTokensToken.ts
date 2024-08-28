
                    import { EventHandler } from '@arkw/core';
                    import { tokenFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetTokensToken: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-token`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { expand,token, token,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/tokens/{token}'].get({
                                query: {expand,token,},
                                params: {token,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `token`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `token`,
                                properties: tokenFields,
                            });
                        },
                })
                