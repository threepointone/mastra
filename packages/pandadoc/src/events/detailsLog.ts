
                    import { EventHandler } from '@arkw/core';
                    import { APILogDetailsResponseFields } from '../constants';
                    import { PandadocIntegration } from '..';

                    export const detailsLog: EventHandler<PandadocIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-APILogDetailsResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { id, id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/public/v1/logs/{id}'].get({
                                query: {id,},
                                params: {id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `APILogDetailsResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `APILogDetailsResponse`,
                                properties: APILogDetailsResponseFields,
                            });
                        },
                })
                