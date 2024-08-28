
                    import { EventHandler } from '@arkw/core';
                    import { TimeEntriesFields } from '../constants';
                    import { HarvestIntegration } from '..';

                    export const listTimeEntries: EventHandler<HarvestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-TimeEntries`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { user_id,client_id,project_id,task_id,external_reference_id,is_billed,is_running,updated_since,from,to,page,per_page, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/time_entries'].get({
                                query: {user_id,client_id,project_id,task_id,external_reference_id,is_billed,is_running,updated_since,from,to,page,per_page,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `TimeEntries`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `TimeEntries`,
                                properties: TimeEntriesFields,
                            });
                        },
                })
                