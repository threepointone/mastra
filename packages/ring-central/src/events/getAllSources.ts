
                    import { EventHandler } from '@arkw/core';
                    import { GetAllSourcesResponseFields } from '../constants';
                    import { Ring-centralIntegration } from '..';

                    export const getAllSources: EventHandler<Ring-centralIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-GetAllSourcesResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { permission,offset,active,limit,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/content_sources'].get({
                                query: {permission,offset,active,limit,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `GetAllSourcesResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `GetAllSourcesResponse`,
                                properties: GetAllSourcesResponseFields,
                            });
                        },
                })
                