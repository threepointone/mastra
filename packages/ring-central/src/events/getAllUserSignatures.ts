
                    import { EventHandler } from '@arkw/core';
                    import { GetAllUserSignaturesResponseFields } from '../constants';
                    import { Ring-centralIntegration } from '..';

                    export const getAllUserSignatures: EventHandler<Ring-centralIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-GetAllUserSignaturesResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { userId, userId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/users/{userId}/signatures'].get({
                                query: {userId,},
                                params: {userId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `GetAllUserSignaturesResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `GetAllUserSignaturesResponse`,
                                properties: GetAllUserSignaturesResponseFields,
                            });
                        },
                })
                