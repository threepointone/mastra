
                    import { EventHandler } from '@arkw/core';
                    import { ClientFields } from '../constants';
                    import { HarvestIntegration } from '..';

                    export const retrieveClient: EventHandler<HarvestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Client`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { clientId, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/clients/{clientId}'].get({
                                query: {clientId,},
                                params: {clientId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Client`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Client`,
                                properties: ClientFields,
                            });
                        },
                })
                