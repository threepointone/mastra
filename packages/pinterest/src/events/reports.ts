
                    import { EventHandler } from '@arkw/core';
                    import { CatalogsReportFields } from '../constants';
                    import { PinterestIntegration } from '..';

                    export const reports: EventHandler<PinterestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-CatalogsReport`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { query_ad_account_id,query_catalogs_report_token,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/catalogs/reports'].get({
                                query: {query_ad_account_id,query_catalogs_report_token,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `CatalogsReport`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `CatalogsReport`,
                                properties: CatalogsReportFields,
                            });
                        },
                })
                