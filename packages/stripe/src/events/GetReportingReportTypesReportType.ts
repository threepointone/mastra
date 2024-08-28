
                    import { EventHandler } from '@arkw/core';
                    import { reporting.report_typeFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetReportingReportTypesReportType: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-reporting.report_type`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { expand,report_type, report_type,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v1/reporting/report_types/{report_type}'].get({
                                query: {expand,report_type,},
                                params: {report_type,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `reporting.report_type`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `reporting.report_type`,
                                properties: reporting.report_typeFields,
                            });
                        },
                })
                