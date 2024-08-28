
                    import { EventHandler } from '@arkw/core';
                    import { UninvoicedReportResultsFields } from '../constants';
                    import { HarvestIntegration } from '..';

                    export const uninvoicedReport: EventHandler<HarvestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-UninvoicedReportResults`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { from,to,page,per_page,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/reports/uninvoiced'].get({
                                query: {from,to,page,per_page,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `UninvoicedReportResults`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `UninvoicedReportResults`,
                                properties: UninvoicedReportResultsFields,
                            });
                        },
                })
                