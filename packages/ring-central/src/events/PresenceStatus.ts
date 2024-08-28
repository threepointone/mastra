
                    import { EventHandler } from '@arkw/core';
                    import { PresenceStatusFields } from '../constants';
                    import { Ring-centralIntegration } from '..';

                    export const PresenceStatus: EventHandler<Ring-centralIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-PresenceStatus`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { presenceStatusId, presenceStatusId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/presence_status/{presenceStatusId}'].get({
                                query: {presenceStatusId,},
                                params: {presenceStatusId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PresenceStatus`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PresenceStatus`,
                                properties: PresenceStatusFields,
                            });
                        },
                })
                