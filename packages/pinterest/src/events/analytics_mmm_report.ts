
                    import { EventHandler } from '@arkw/core';
                    import { GetMMMReportResponseFields } from '../constants';
                    import { PinterestIntegration } from '..';

                    export const analytics_mmm_report: EventHandler<PinterestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-GetMMMReportResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { path_ad_account_id,query_token_required, ad_account_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/ad_accounts/{ad_account_id}/mmm_reports'].get({
                                query: {path_ad_account_id,query_token_required,},
                                params: {ad_account_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `GetMMMReportResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `GetMMMReportResponse`,
                                properties: GetMMMReportResponseFields,
                            });
                        },
                })
                