
                    import { EventHandler } from '@arkw/core';
                    import { TeamFields } from '../constants';
                    import { Ring-centralIntegration } from '..';

                    export const Team: EventHandler<Ring-centralIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Team`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { teamId, teamId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/teams/{teamId}'].get({
                                query: {teamId,},
                                params: {teamId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Team`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Team`,
                                properties: TeamFields,
                            });
                        },
                })
                