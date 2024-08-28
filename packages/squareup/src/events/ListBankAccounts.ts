
                    import { EventHandler } from '@arkw/core';
                    import { ListBankAccountsResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const ListBankAccounts: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-ListBankAccountsResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { cursor,limit,location_id,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2/bank-accounts'].get({
                                query: {cursor,limit,location_id,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ListBankAccountsResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ListBankAccountsResponse`,
                                properties: ListBankAccountsResponseFields,
                            });
                        },
                })
                