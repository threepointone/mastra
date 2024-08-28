
                    import { EventHandler } from '@arkw/core';
                    import { AdResponseFields } from '../constants';
                    import { PinterestIntegration } from '..';

                    export const ads: EventHandler<PinterestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-AdResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { path_ad_account_id,path_ad_id, ad_account_id,ad_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/ad_accounts/{ad_account_id}/ads/{ad_id}'].get({
                                query: {path_ad_account_id,path_ad_id,},
                                params: {ad_account_id,ad_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `AdResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `AdResponse`,
                                properties: AdResponseFields,
                            });
                        },
                })
                