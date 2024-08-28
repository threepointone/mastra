
                    import { EventHandler } from '@arkw/core';
                    import { ConversionTagResponseFields } from '../constants';
                    import { PinterestIntegration } from '..';

                    export const conversion_tags: EventHandler<PinterestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-ConversionTagResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { path_ad_account_id,path_conversion_tag_id, ad_account_id,conversion_tag_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/ad_accounts/{ad_account_id}/conversion_tags/{conversion_tag_id}'].get({
                                query: {path_ad_account_id,path_conversion_tag_id,},
                                params: {ad_account_id,conversion_tag_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ConversionTagResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ConversionTagResponse`,
                                properties: ConversionTagResponseFields,
                            });
                        },
                })
                