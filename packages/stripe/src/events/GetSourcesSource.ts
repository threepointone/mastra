
                    import { EventHandler } from '@arkw/core';
                    import { sourceFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetSourcesSource: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-source`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { client_secret,expand,source, source,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v1/sources/{source}'].get({
                                query: {client_secret,expand,source,},
                                params: {source,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `source`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `source`,
                                properties: sourceFields,
                            });
                        },
                })
                