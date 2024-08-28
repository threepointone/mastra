
                    import { EventHandler } from '@arkw/core';
                    import { TargetingOptionResponseFields } from '../constants';
                    import { PinterestIntegration } from '..';

                    export const taring_optionsget: EventHandler<PinterestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-TargetingOptionResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { path_targeting_type,query_client_id,query_oauth_signature,query_timestamp,query_ad_account_id,targeting_type, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/resources/targeting/{targeting_type}'].get({
                                query: {path_targeting_type,query_client_id,query_oauth_signature,query_timestamp,query_ad_account_id,},
                                params: {targeting_type,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `TargetingOptionResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `TargetingOptionResponse`,
                                properties: TargetingOptionResponseFields,
                            });
                        },
                })
                