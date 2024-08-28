
                    import { EventHandler } from '@arkw/core';
                    import { AccountBrandsFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const Brands_GetBrands: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-AccountBrands`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,exclude_distributor_brand,include_logos, accountId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2.1/accounts/{accountId}/brands'].get({
                                query: {accountId,exclude_distributor_brand,include_logos,},
                                params: {accountId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `AccountBrands`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `AccountBrands`,
                                properties: AccountBrandsFields,
                            });
                        },
                })
                