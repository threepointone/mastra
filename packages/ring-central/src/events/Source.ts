
                    import { EventHandler } from '@arkw/core';
                    import { SourceFields } from '../constants';
                    import { Ring-centralIntegration } from '..';

                    export const Source: EventHandler<Ring-centralIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-Source`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { sourceId, sourceId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/content_sources/{sourceId}'].get({
                                query: {sourceId,},
                                params: {sourceId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Source`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Source`,
                                properties: SourceFields,
                            });
                        },
                })
                