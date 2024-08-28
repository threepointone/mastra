
                    import { EventHandler } from '@arkw/core';
                    import { WebLinkFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const _shared_items#web_links: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-WebLink`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { if-none-match,fields,boxapi,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/shared_items#web_links'].get({
                                query: {if-none-match,fields,boxapi,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `WebLink`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `WebLink`,
                                properties: WebLinkFields,
                            });
                        },
                })
                