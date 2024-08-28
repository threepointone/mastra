
                    import { EventHandler } from '@arkw/core';
                    import { reporting.report_runFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetReportingReportRunsReportRun: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-reporting.report_run`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { expand,report_run, report_run,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/reporting/report_runs/{report_run}'].get({
                                query: {expand,report_run,},
                                params: {report_run,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `reporting.report_run`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `reporting.report_run`,
                                properties: reporting.report_runFields,
                            });
                        },
                })
                