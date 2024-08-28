
                    import { EventHandler } from '@arkw/core';
                    import { DocumentDetailsResponseFields } from '../constants';
                    import { PandadocIntegration } from '..';

                    export const detailsDocument: EventHandler<PandadocIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-DocumentDetailsResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/public/v1/documents/{id}/details'].get({
                                query: {id,},
                                params: {id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `DocumentDetailsResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `DocumentDetailsResponse`,
                                properties: DocumentDetailsResponseFields,
                            });
                        },
                })
                