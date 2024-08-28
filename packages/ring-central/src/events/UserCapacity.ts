
                    import { EventHandler } from '@arkw/core';
                    import { UserCapacityFields } from '../constants';
                    import { Ring-centralIntegration } from '..';

                    export const UserCapacity: EventHandler<Ring-centralIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-UserCapacity`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { userCapacityId, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/user_capacities/{userCapacityId}'].get({
                                query: {userCapacityId,},
                                params: {userCapacityId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `UserCapacity`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `UserCapacity`,
                                properties: UserCapacityFields,
                            });
                        },
                })
                