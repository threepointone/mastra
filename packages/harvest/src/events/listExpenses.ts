
                    import { EventHandler } from '@arkw/core';
                    import { ExpensesFields } from '../constants';
                    import { HarvestIntegration } from '..';

                    export const listExpenses: EventHandler<HarvestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Expenses`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { user_id,client_id,project_id,is_billed,updated_since,from,to,page,per_page, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/expenses'].get({
                                query: {user_id,client_id,project_id,is_billed,updated_since,from,to,page,per_page,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Expenses`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Expenses`,
                                properties: ExpensesFields,
                            });
                        },
                })
                