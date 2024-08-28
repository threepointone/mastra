
                    import { EventHandler } from '@arkw/core';
                    import { ChangedWorklogsFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const IdsOfWorklogsDeletedSince: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-ChangedWorklogs`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { since,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/worklog/deleted'].get({
                                query: {since,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ChangedWorklogs`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ChangedWorklogs`,
                                properties: ChangedWorklogsFields,
                            });
                        },
                })
                