
                    import { EventHandler } from '@arkw/core';
                    import { TrendingKeywordsResponseFields } from '../constants';
                    import { PinterestIntegration } from '..';

                    export const trending_keywordslist: EventHandler<PinterestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-TrendingKeywordsResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { path_trend_region,path_trend_type,query_interest_list,query_gender_list,query_age_bucket_list,include_keywords,query_normalize_against_group,query_trending_keyword_limit,region,trend_type, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/trends/keywords/{region}/top/{trend_type}'].get({
                                query: {path_trend_region,path_trend_type,query_interest_list,query_gender_list,query_age_bucket_list,include_keywords,query_normalize_against_group,query_trending_keyword_limit,},
                                params: {region,trend_type,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `TrendingKeywordsResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `TrendingKeywordsResponse`,
                                properties: TrendingKeywordsResponseFields,
                            });
                        },
                })
                