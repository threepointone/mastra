
                    import { EventHandler } from '@arkw/core';
                    import { ListCustomersResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const ListCustomers: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-ListCustomersResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { cursor,limit,sort_field,sort_order,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2/customers'].get({
                                query: {cursor,limit,sort_field,sort_order,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ListCustomersResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ListCustomersResponse`,
                                properties: ListCustomersResponseFields,
                            });
                        },
                })
                