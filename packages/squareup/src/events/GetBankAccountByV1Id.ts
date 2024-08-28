
                    import { EventHandler } from '@arkw/core';
                    import { GetBankAccountByV1IdResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const GetBankAccountByV1Id: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-GetBankAccountByV1IdResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { v1_bank_account_id, v1_bank_account_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2/bank-accounts/by-v1-id/{v1_bank_account_id}'].get({
                                query: {v1_bank_account_id,},
                                params: {v1_bank_account_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `GetBankAccountByV1IdResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `GetBankAccountByV1IdResponse`,
                                properties: GetBankAccountByV1IdResponseFields,
                            });
                        },
                })
                