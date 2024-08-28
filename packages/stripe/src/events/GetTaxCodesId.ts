
                    import { EventHandler } from '@arkw/core';
                    import { tax_codeFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetTaxCodesId: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-tax_code`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { expand,id, id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/tax_codes/{id}'].get({
                                query: {expand,id,},
                                params: {id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `tax_code`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `tax_code`,
                                properties: tax_codeFields,
                            });
                        },
                })
                