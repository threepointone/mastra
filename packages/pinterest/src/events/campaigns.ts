
                    import { EventHandler } from '@arkw/core';
                    import { CampaignResponseFields } from '../constants';
                    import { PinterestIntegration } from '..';

                    export const campaigns: EventHandler<PinterestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-CampaignResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { path_ad_account_id,path_campaign_id, ad_account_id,campaign_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/ad_accounts/{ad_account_id}/campaigns/{campaign_id}'].get({
                                query: {path_ad_account_id,path_campaign_id,},
                                params: {ad_account_id,campaign_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `CampaignResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `CampaignResponse`,
                                properties: CampaignResponseFields,
                            });
                        },
                })
                