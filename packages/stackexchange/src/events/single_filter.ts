
                    import { EventHandler } from '@arkw/core';
                    import { single_filterFields } from '../constants';
                    import { StackexchangeIntegration } from '..';

                    export const single_filter: EventHandler<StackexchangeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-single_filter`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { base,exclude,include,unsafe,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/filters/create'].get({
                                query: {base,exclude,include,unsafe,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `single_filter`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `single_filter`,
                                properties: single_filterFields,
                            });
                        },
                })
                