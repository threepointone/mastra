
                    import { EventHandler } from '@arkw/core';
                    import { Time-Off-Request-ListFields } from '../constants';
                    import { GustoIntegration } from '..';

                    export const _v1_companies_company_id_time_off_requests: EventHandler<GustoIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Time-Off-Request-List`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { start_date,end_date,pageParam,perParam,company_id_or_uuid, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/companies/{company_id_or_uuid}/time_off_requests'].get({
                                query: {start_date,end_date,pageParam,perParam,},
                                params: {company_id_or_uuid,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Time-Off-Request-List`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Time-Off-Request-List`,
                                properties: Time-Off-Request-ListFields,
                            });
                        },
                })
                