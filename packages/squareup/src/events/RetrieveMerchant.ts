
                    import { EventHandler } from '@arkw/core';
                    import { RetrieveMerchantResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const RetrieveMerchant: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-RetrieveMerchantResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { merchant_id, merchant_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2/merchants/{merchant_id}'].get({
                                query: {merchant_id,},
                                params: {merchant_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `RetrieveMerchantResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `RetrieveMerchantResponse`,
                                properties: RetrieveMerchantResponseFields,
                            });
                        },
                })
                