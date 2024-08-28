
                    import { EventHandler } from '@arkw/core';
                    import { TrashWebLinkFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const get_web_links_id_trash: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-TrashWebLink`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { web_link_id,fields, web_link_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/web_links/{web_link_id}/trash'].get({
                                query: {web_link_id,fields,},
                                params: {web_link_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `TrashWebLink`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `TrashWebLink`,
                                properties: TrashWebLinkFields,
                            });
                        },
                })
                