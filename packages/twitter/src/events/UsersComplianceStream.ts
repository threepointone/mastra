
                    import { EventHandler } from '@arkw/core';
                    import { UserComplianceStreamResponseFields } from '../constants';
                    import { TwitterIntegration } from '..';

                    export const UsersComplianceStream: EventHandler<TwitterIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-UserComplianceStreamResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { backfill_minutes,partition,start_time,end_time, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/2/users/compliance/stream'].get({
                                query: {backfill_minutes,partition,start_time,end_time,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `UserComplianceStreamResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `UserComplianceStreamResponse`,
                                properties: UserComplianceStreamResponseFields,
                            });
                        },
                })
                