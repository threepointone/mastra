
                    import { EventHandler } from '@arkw/core';
                    import { GetAllContentsResponseFields } from '../constants';
                    import { Ring-centralIntegration } from '..';

                    export const AllContents: EventHandler<Ring-centralIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-GetAllContentsResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { q,offset,limit,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/contents'].get({
                                query: {q,offset,limit,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `GetAllContentsResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `GetAllContentsResponse`,
                                properties: GetAllContentsResponseFields,
                            });
                        },
                })
                