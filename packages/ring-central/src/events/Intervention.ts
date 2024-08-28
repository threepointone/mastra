
                    import { EventHandler } from '@arkw/core';
                    import { InterventionFields } from '../constants';
                    import { Ring-centralIntegration } from '..';

                    export const Intervention: EventHandler<Ring-centralIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Intervention`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { interventionId, interventionId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/interventions/{interventionId}'].get({
                                query: {interventionId,},
                                params: {interventionId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Intervention`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Intervention`,
                                properties: InterventionFields,
                            });
                        },
                })
                