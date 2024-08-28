
                    import { EventHandler } from '@arkw/core';
                    import { GroupBrandsFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const Brands_GetGroupBrands: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-GroupBrands`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,groupId, accountId,groupId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/groups/{groupId}/brands'].get({
                                query: {accountId,groupId,},
                                params: {accountId,groupId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `GroupBrands`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `GroupBrands`,
                                properties: GroupBrandsFields,
                            });
                        },
                })
                