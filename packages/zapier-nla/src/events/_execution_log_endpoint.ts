
                    import { EventHandler } from '@arkw/core';
                    import { ExecuteResponseFields } from '../constants';
                    import { Zapier-nlaIntegration } from '..';

                    export const _execution_log_endpoint: EventHandler<Zapier-nlaIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-ExecuteResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { execution_log_id, execution_log_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/api/v1/execution-log/{execution_log_id}/'].get({
                                query: {execution_log_id,},
                                params: {execution_log_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ExecuteResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ExecuteResponse`,
                                properties: ExecuteResponseFields,
                            });
                        },
                })
                