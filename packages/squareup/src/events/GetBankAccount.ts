
                    import { EventHandler } from '@arkw/core';
                    import { GetBankAccountResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const GetBankAccount: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-GetBankAccountResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { bank_account_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2/bank-accounts/{bank_account_id}'].get({
                                query: {bank_account_id,},
                                params: {bank_account_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `GetBankAccountResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `GetBankAccountResponse`,
                                properties: GetBankAccountResponseFields,
                            });
                        },
                })
                