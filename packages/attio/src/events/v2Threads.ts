
                    import { EventHandler } from '@arkw/core';
                    import { threadFields } from '../constants';
                    import { AttioIntegration } from '..';

                    export const v2Threads: EventHandler<AttioIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-thread`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { record_id,object,entry_id,list,limit,offset, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2/threads'].get({
                                query: {record_id,object,entry_id,list,limit,offset,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `thread`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `thread`,
                                properties: threadFields,
                            });
                        },
                })
                