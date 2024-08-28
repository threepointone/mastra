
                    import { EventHandler } from '@arkw/core';
                    import { get_the_status_of_the_bulk_read_job_responseFields } from '../constants';
                    import { ZohoIntegration } from '..';

                    export const get_the_status_of_the_bulk_read_job_response: EventHandler<ZohoIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-get_the_status_of_the_bulk_read_job_response`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { account_owner_name,app_link_name,report_link_name,job_ID, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/creator/v2/bulk/{account_owner_name}/{app_link_name}/report/{report_link_name}/read/{job_ID}'].get({
                                query: {account_owner_name,app_link_name,report_link_name,job_ID,},
                                params: {account_owner_name,app_link_name,report_link_name,job_ID,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `get_the_status_of_the_bulk_read_job_response`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `get_the_status_of_the_bulk_read_job_response`,
                                properties: get_the_status_of_the_bulk_read_job_responseFields,
                            });
                        },
                })
                