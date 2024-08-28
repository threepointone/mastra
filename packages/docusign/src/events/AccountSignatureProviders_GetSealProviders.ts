
                    import { EventHandler } from '@arkw/core';
                    import { AccountSealProvidersFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const AccountSignatureProviders_GetSealProviders: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-AccountSealProviders`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/seals'].get({
                                query: {accountId,},
                                params: {accountId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `AccountSealProviders`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `AccountSealProviders`,
                                properties: AccountSealProvidersFields,
                            });
                        },
                })
                