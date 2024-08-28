
                    import { EventHandler } from '@arkw/core';
                    import { AuditRecordsFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const AuditRecords: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-AuditRecords`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { offset,limit,filter,from,to, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/auditing/record'].get({
                                query: {offset,limit,filter,from,to,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `AuditRecords`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `AuditRecords`,
                                properties: AuditRecordsFields,
                            });
                        },
                })
                