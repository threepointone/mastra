
                    import { EventHandler } from '@arkw/core';
                    import { Pay-Schedule-ObjectFields } from '../constants';
                    import { GustoIntegration } from '..';

                    export const -v1-companies-company_id-pay_schedules-pay_schedule_id: EventHandler<GustoIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-Pay-Schedule-Object`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {  company_id_or_uuid,pay_schedule_id_or_uuid,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v1/companies/{company_id_or_uuid}/pay_schedules/{pay_schedule_id_or_uuid}'].get({
                                
                                params: {company_id_or_uuid,pay_schedule_id_or_uuid,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Pay-Schedule-Object`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Pay-Schedule-Object`,
                                properties: Pay-Schedule-ObjectFields,
                            });
                        },
                })
                