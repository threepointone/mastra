
                    import { EventHandler } from '@arkw/core';
                    import { TimeEntryFields } from '../constants';
                    import { HarvestIntegration } from '..';

                    export const retrieveTimeEntry: EventHandler<HarvestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-TimeEntry`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { timeEntryId, timeEntryId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/time_entries/{timeEntryId}'].get({
                                query: {timeEntryId,},
                                params: {timeEntryId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `TimeEntry`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `TimeEntry`,
                                properties: TimeEntryFields,
                            });
                        },
                })
                