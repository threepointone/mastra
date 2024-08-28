
                    import { EventHandler } from '@arkw/core';
                    import { TimeSheetFields } from '../constants';
                    import { Ring-centralIntegration } from '..';

                    export const TimeSheet: EventHandler<Ring-centralIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-TimeSheet`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { timeSheetId, timeSheetId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/time_sheets/{timeSheetId}'].get({
                                query: {timeSheetId,},
                                params: {timeSheetId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `TimeSheet`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `TimeSheet`,
                                properties: TimeSheetFields,
                            });
                        },
                })
                