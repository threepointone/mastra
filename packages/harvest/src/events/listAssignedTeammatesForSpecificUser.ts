
                    import { EventHandler } from '@arkw/core';
                    import { TeammatesFields } from '../constants';
                    import { HarvestIntegration } from '..';

                    export const listAssignedTeammatesForSpecificUser: EventHandler<HarvestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Teammates`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { userId,page,cursor,per_page, userId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/users/{userId}/teammates'].get({
                                query: {userId,page,cursor,per_page,},
                                params: {userId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Teammates`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Teammates`,
                                properties: TeammatesFields,
                            });
                        },
                })
                