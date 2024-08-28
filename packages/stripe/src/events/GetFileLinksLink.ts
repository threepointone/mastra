
                    import { EventHandler } from '@arkw/core';
                    import { file_linkFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetFileLinksLink: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-file_link`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { expand,link, link,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v1/file_links/{link}'].get({
                                query: {expand,link,},
                                params: {link,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `file_link`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `file_link`,
                                properties: file_linkFields,
                            });
                        },
                })
                