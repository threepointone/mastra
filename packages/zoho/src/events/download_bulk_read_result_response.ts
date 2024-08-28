
                    import { EventHandler } from '@arkw/core';
                    import { download_bulk_read_result_responseFields } from '../constants';
                    import { ZohoIntegration } from '..';

                    export const download_bulk_read_result_response: EventHandler<ZohoIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-download_bulk_read_result_response`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { account_owner_name,app_link_name,report_link_name,job_ID, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/creator/v2/bulk/{account_owner_name}/{app_link_name}/report/{report_link_name}/read/{job_ID}/result'].get({
                                query: {account_owner_name,app_link_name,report_link_name,job_ID,},
                                params: {account_owner_name,app_link_name,report_link_name,job_ID,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `download_bulk_read_result_response`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `download_bulk_read_result_response`,
                                properties: download_bulk_read_result_responseFields,
                            });
                        },
                })
                