
                    import { EventHandler } from '@arkw/core';
                    import { KeywordsMetricsArrayResponseFields } from '../constants';
                    import { PinterestIntegration } from '..';

                    export const country_keywords_metrics: EventHandler<PinterestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-KeywordsMetricsArrayResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { path_ad_account_id,query_country_code,query_keywords,ad_account_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/ad_accounts/{ad_account_id}/keywords/metrics'].get({
                                query: {path_ad_account_id,query_country_code,query_keywords,},
                                params: {ad_account_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `KeywordsMetricsArrayResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `KeywordsMetricsArrayResponse`,
                                properties: KeywordsMetricsArrayResponseFields,
                            });
                        },
                })
                