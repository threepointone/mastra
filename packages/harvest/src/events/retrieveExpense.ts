
                    import { EventHandler } from '@arkw/core';
                    import { ExpenseFields } from '../constants';
                    import { HarvestIntegration } from '..';

                    export const retrieveExpense: EventHandler<HarvestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Expense`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { expenseId, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/expenses/{expenseId}'].get({
                                query: {expenseId,},
                                params: {expenseId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Expense`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Expense`,
                                properties: ExpenseFields,
                            });
                        },
                })
                