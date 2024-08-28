
                    import { EventHandler } from '@arkw/core';
                    import { UserFields } from '../constants';
                    import { Ring-centralIntegration } from '..';

                    export const User: EventHandler<Ring-centralIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-User`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { userId, userId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/users/{userId}'].get({
                                query: {userId,},
                                params: {userId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `User`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `User`,
                                properties: UserFields,
                            });
                        },
                })
                