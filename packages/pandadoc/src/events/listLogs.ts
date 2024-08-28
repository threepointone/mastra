
                    import { EventHandler } from '@arkw/core';
                    import { APILogListResponseFields } from '../constants';
                    import { PandadocIntegration } from '..';

                    export const listLogs: EventHandler<PandadocIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-APILogListResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { since,to,count,page,statuses,methods,search,environment_type,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/public/v1/logs'].get({
                                query: {since,to,count,page,statuses,methods,search,environment_type,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `APILogListResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `APILogListResponse`,
                                properties: APILogListResponseFields,
                            });
                        },
                })
                