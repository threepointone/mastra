
                    import { EventHandler } from '@arkw/core';
                    import { ConversionTagsOcpmEligibleResponseFields } from '../constants';
                    import { PinterestIntegration } from '..';

                    export const ocpm_eligible_conversion_tags: EventHandler<PinterestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-ConversionTagsOcpmEligibleResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { path_ad_account_id, ad_account_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/ad_accounts/{ad_account_id}/conversion_tags/ocpm_eligible'].get({
                                query: {path_ad_account_id,},
                                params: {ad_account_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ConversionTagsOcpmEligibleResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ConversionTagsOcpmEligibleResponse`,
                                properties: ConversionTagsOcpmEligibleResponseFields,
                            });
                        },
                })
                