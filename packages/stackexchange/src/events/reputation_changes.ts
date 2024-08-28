
                    import { EventHandler } from '@arkw/core';
                    import { reputation_changesFields } from '../constants';
                    import { StackexchangeIntegration } from '..';

                    export const reputation_changes: EventHandler<StackexchangeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-reputation_changes`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { ids,fromdate,todate,pagesize,page,filter,callback,site, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/users/{ids}/reputation'].get({
                                query: {ids,fromdate,todate,pagesize,page,filter,callback,site,},
                                params: {ids,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `reputation_changes`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `reputation_changes`,
                                properties: reputation_changesFields,
                            });
                        },
                })
                