
                    import { EventHandler } from '@arkw/core';
                    import { RetrieveLoyaltyAccountResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const RetrieveLoyaltyAccount: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-RetrieveLoyaltyAccountResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { account_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2/loyalty/accounts/{account_id}'].get({
                                query: {account_id,},
                                params: {account_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `RetrieveLoyaltyAccountResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `RetrieveLoyaltyAccountResponse`,
                                properties: RetrieveLoyaltyAccountResponseFields,
                            });
                        },
                })
                