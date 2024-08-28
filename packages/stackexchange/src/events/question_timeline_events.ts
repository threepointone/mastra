
                    import { EventHandler } from '@arkw/core';
                    import { question_timeline_eventsFields } from '../constants';
                    import { StackexchangeIntegration } from '..';

                    export const question_timeline_events: EventHandler<StackexchangeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-question_timeline_events`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { ids,fromdate,todate,pagesize,page,filter,callback,site, ids,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/questions/{ids}/timeline'].get({
                                query: {ids,fromdate,todate,pagesize,page,filter,callback,site,},
                                params: {ids,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `question_timeline_events`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `question_timeline_events`,
                                properties: question_timeline_eventsFields,
                            });
                        },
                })
                