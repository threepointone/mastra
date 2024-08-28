
                    import { EventHandler } from '@arkw/core';
                    import { AudienceFields } from '../constants';
                    import { PinterestIntegration } from '..';

                    export const audiences: EventHandler<PinterestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-Audience`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { path_ad_account_id,path_audience_id, ad_account_id,audience_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/ad_accounts/{ad_account_id}/audiences/{audience_id}'].get({
                                query: {path_ad_account_id,path_audience_id,},
                                params: {ad_account_id,audience_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Audience`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Audience`,
                                properties: AudienceFields,
                            });
                        },
                })
                