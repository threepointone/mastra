
                    import { EventHandler } from '@arkw/core';
                    import { userSignatureFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const UserSignatures_GetUserSignature: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-userSignature`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,signatureId,userId, accountId,userId,signatureId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2.1/accounts/{accountId}/users/{userId}/signatures/{signatureId}'].get({
                                query: {accountId,signatureId,userId,},
                                params: {accountId,userId,signatureId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `userSignature`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `userSignature`,
                                properties: userSignatureFields,
                            });
                        },
                })
                