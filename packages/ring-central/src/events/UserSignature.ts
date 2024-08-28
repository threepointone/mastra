
                    import { EventHandler } from '@arkw/core';
                    import { UserSignatureFields } from '../constants';
                    import { Ring-centralIntegration } from '..';

                    export const UserSignature: EventHandler<Ring-centralIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-UserSignature`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { userId,signatureId, userId,signatureId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/users/{userId}/signatures/{signatureId}'].get({
                                query: {userId,signatureId,},
                                params: {userId,signatureId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `UserSignature`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `UserSignature`,
                                properties: UserSignatureFields,
                            });
                        },
                })
                