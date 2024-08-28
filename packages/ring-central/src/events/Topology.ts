
                    import { EventHandler } from '@arkw/core';
                    import { TopologyFields } from '../constants';
                    import { Ring-centralIntegration } from '..';

                    export const Topology: EventHandler<Ring-centralIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Topology`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { topologyId, topologyId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/topologies/{topologyId}'].get({
                                query: {topologyId,},
                                params: {topologyId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Topology`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Topology`,
                                properties: TopologyFields,
                            });
                        },
                })
                