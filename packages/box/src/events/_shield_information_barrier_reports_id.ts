
                    import { EventHandler } from '@arkw/core';
                    import { ShieldInformationBarrierReportFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const _shield_information_barrier_reports_id: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-ShieldInformationBarrierReport`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { shield_information_barrier_report_id, shield_information_barrier_report_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/shield_information_barrier_reports/{shield_information_barrier_report_id}'].get({
                                query: {shield_information_barrier_report_id,},
                                params: {shield_information_barrier_report_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ShieldInformationBarrierReport`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ShieldInformationBarrierReport`,
                                properties: ShieldInformationBarrierReportFields,
                            });
                        },
                })
                