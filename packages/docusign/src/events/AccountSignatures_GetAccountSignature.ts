
                    import { EventHandler } from '@arkw/core';
                    import { accountSignatureFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const AccountSignatures_GetAccountSignature: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-accountSignature`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,signatureId, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/signatures/{signatureId}'].get({
                                query: {accountId,signatureId,},
                                params: {accountId,signatureId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `accountSignature`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `accountSignature`,
                                properties: accountSignatureFields,
                            });
                        },
                })
                