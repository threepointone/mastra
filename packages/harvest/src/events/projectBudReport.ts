
                    import { EventHandler } from '@arkw/core';
                    import { ProjectBudgetReportResultsFields } from '../constants';
                    import { HarvestIntegration } from '..';

                    export const projectBudReport: EventHandler<HarvestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-ProjectBudgetReportResults`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { page,per_page,is_active, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/reports/project_budget'].get({
                                query: {page,per_page,is_active,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ProjectBudgetReportResults`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ProjectBudgetReportResults`,
                                properties: ProjectBudgetReportResultsFields,
                            });
                        },
                })
                