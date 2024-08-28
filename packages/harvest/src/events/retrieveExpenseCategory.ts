
                    import { EventHandler } from '@arkw/core';
                    import { ExpenseCategoryFields } from '../constants';
                    import { HarvestIntegration } from '..';

                    export const retrieveExpenseCategory: EventHandler<HarvestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-ExpenseCategory`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { expenseCategoryId, expenseCategoryId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/expense_categories/{expenseCategoryId}'].get({
                                query: {expenseCategoryId,},
                                params: {expenseCategoryId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ExpenseCategory`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ExpenseCategory`,
                                properties: ExpenseCategoryFields,
                            });
                        },
                })
                