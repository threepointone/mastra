
                    import { EventHandler } from '@arkw/core';
                    import { ConversionTagListResponseFields } from '../constants';
                    import { PinterestIntegration } from '..';

                    export const conversion_tagslist: EventHandler<PinterestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-ConversionTagListResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { path_ad_account_id,query_filter_deleted, ad_account_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/ad_accounts/{ad_account_id}/conversion_tags'].get({
                                query: {path_ad_account_id,query_filter_deleted,},
                                params: {ad_account_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ConversionTagListResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ConversionTagListResponse`,
                                properties: ConversionTagListResponseFields,
                            });
                        },
                })
                