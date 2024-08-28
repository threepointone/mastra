
                    import { EventHandler } from '@arkw/core';
                    import { ExpenseReportsResultsFields } from '../constants';
                    import { HarvestIntegration } from '..';

                    export const clientsExpensesReport: EventHandler<HarvestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-ExpenseReportsResults`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { from,to,page,per_page,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/reports/expenses/clients'].get({
                                query: {from,to,page,per_page,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ExpenseReportsResults`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ExpenseReportsResults`,
                                properties: ExpenseReportsResultsFields,
                            });
                        },
                })
                