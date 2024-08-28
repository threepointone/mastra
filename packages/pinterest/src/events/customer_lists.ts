
                    import { EventHandler } from '@arkw/core';
                    import { CustomerListFields } from '../constants';
                    import { PinterestIntegration } from '..';

                    export const customer_lists: EventHandler<PinterestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-CustomerList`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { path_ad_account_id,path_customer_list_id, ad_account_id,customer_list_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/ad_accounts/{ad_account_id}/customer_lists/{customer_list_id}'].get({
                                query: {path_ad_account_id,path_customer_list_id,},
                                params: {ad_account_id,customer_list_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `CustomerList`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `CustomerList`,
                                properties: CustomerListFields,
                            });
                        },
                })
                