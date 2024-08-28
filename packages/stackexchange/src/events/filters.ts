
                    import { EventHandler } from '@arkw/core';
                    import { filtersFields } from '../constants';
                    import { StackexchangeIntegration } from '..';

                    export const filters: EventHandler<StackexchangeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-filters`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { filters, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/filters/{filters}'].get({
                                query: {filters,},
                                params: {filters,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `filters`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `filters`,
                                properties: filtersFields,
                            });
                        },
                })
                