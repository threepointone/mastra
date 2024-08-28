
                    import { EventHandler } from '@arkw/core';
                    import { brandFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const Brand_GetBrand: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-brand`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,brandId,include_external_references,include_logos, accountId,brandId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/brands/{brandId}'].get({
                                query: {accountId,brandId,include_external_references,include_logos,},
                                params: {accountId,brandId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `brand`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `brand`,
                                properties: brandFields,
                            });
                        },
                })
                