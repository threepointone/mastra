
                    import { EventHandler } from '@arkw/core';
                    import { access_tokensFields } from '../constants';
                    import { StackexchangeIntegration } from '..';

                    export const access_tokens: EventHandler<StackexchangeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-access_tokens`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accessTokens,pagesize,page,filter,callback, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/apps/{accessTokens}/de-authenticate'].get({
                                query: {accessTokens,pagesize,page,filter,callback,},
                                params: {accessTokens,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `access_tokens`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `access_tokens`,
                                properties: access_tokensFields,
                            });
                        },
                })
                