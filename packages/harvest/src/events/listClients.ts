
                    import { EventHandler } from '@arkw/core';
                    import { ClientsFields } from '../constants';
                    import { HarvestIntegration } from '..';

                    export const listClients: EventHandler<HarvestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-Clients`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { is_active,updated_since,page,cursor,per_page,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/clients'].get({
                                query: {is_active,updated_since,page,cursor,per_page,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Clients`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Clients`,
                                properties: ClientsFields,
                            });
                        },
                })
                