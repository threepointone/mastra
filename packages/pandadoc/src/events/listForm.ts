
                    import { EventHandler } from '@arkw/core';
                    import { FormListResponseFields } from '../constants';
                    import { PandadocIntegration } from '..';

                    export const listForm: EventHandler<PandadocIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-FormListResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { count,page,status,order_by,asc,name,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/public/v1/forms'].get({
                                query: {count,page,status,order_by,asc,name,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `FormListResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `FormListResponse`,
                                properties: FormListResponseFields,
                            });
                        },
                })
                