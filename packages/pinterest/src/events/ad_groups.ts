
                    import { EventHandler } from '@arkw/core';
                    import { AdGroupResponseFields } from '../constants';
                    import { PinterestIntegration } from '..';

                    export const ad_groups: EventHandler<PinterestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-AdGroupResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { path_ad_account_id,path_ad_group_id, ad_account_id,ad_group_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/ad_accounts/{ad_account_id}/ad_groups/{ad_group_id}'].get({
                                query: {path_ad_account_id,path_ad_group_id,},
                                params: {ad_account_id,ad_group_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `AdGroupResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `AdGroupResponse`,
                                properties: AdGroupResponseFields,
                            });
                        },
                })
                