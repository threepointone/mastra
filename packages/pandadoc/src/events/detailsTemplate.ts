
                    import { EventHandler } from '@arkw/core';
                    import { TemplateDetailsResponseFields } from '../constants';
                    import { PandadocIntegration } from '..';

                    export const detailsTemplate: EventHandler<PandadocIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-TemplateDetailsResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/public/v1/templates/{id}/details'].get({
                                query: {id,},
                                params: {id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `TemplateDetailsResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `TemplateDetailsResponse`,
                                properties: TemplateDetailsResponseFields,
                            });
                        },
                })
                