
                    import { EventHandler } from '@arkw/core';
                    import { AudienceInsightsResponseFields } from '../constants';
                    import { PinterestIntegration } from '..';

                    export const audience_insights: EventHandler<PinterestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-AudienceInsightsResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { path_ad_account_id,query_audience_insight_type,ad_account_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/ad_accounts/{ad_account_id}/audience_insights'].get({
                                query: {path_ad_account_id,query_audience_insight_type,},
                                params: {ad_account_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `AudienceInsightsResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `AudienceInsightsResponse`,
                                properties: AudienceInsightsResponseFields,
                            });
                        },
                })
                