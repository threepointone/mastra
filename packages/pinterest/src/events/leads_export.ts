
                    import { EventHandler } from '@arkw/core';
                    import { LeadsExportResponseDataFields } from '../constants';
                    import { PinterestIntegration } from '..';

                    export const leads_export: EventHandler<PinterestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-LeadsExportResponseData`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { path_ad_account_id,leads_export_id,ad_account_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/ad_accounts/{ad_account_id}/leads_export/{leads_export_id}'].get({
                                query: {path_ad_account_id,leads_export_id,},
                                params: {ad_account_id,leads_export_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `LeadsExportResponseData`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `LeadsExportResponseData`,
                                properties: LeadsExportResponseDataFields,
                            });
                        },
                })
                