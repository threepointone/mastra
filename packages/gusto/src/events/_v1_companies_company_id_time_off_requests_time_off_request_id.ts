
                    import { EventHandler } from '@arkw/core';
                    import { Time-Off-Request-ObjectFields } from '../constants';
                    import { GustoIntegration } from '..';

                    export const _v1_companies_company_id_time_off_requests_time_off_request_id: EventHandler<GustoIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Time-Off-Request-Object`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { company_id_or_uuid,time_off_request_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/companies/{company_id_or_uuid}/time_off_requests/{time_off_request_id}'].get({
                                
                                params: {company_id_or_uuid,time_off_request_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Time-Off-Request-Object`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Time-Off-Request-Object`,
                                properties: Time-Off-Request-ObjectFields,
                            });
                        },
                })
                