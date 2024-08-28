
                    import { EventHandler } from '@arkw/core';
                    import { download_file_responseFields } from '../constants';
                    import { ZohoIntegration } from '..';

                    export const download_file_response: EventHandler<ZohoIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-download_file_response`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { account_owner_name,app_link_name,report_link_name,record_ID,field_link_name, account_owner_name,app_link_name,report_link_name,record_ID,field_link_name,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/creator/v2/data/{account_owner_name}/{app_link_name}/report/{report_link_name}/{record_ID}/{field_link_name}/download'].get({
                                query: {account_owner_name,app_link_name,report_link_name,record_ID,field_link_name,},
                                params: {account_owner_name,app_link_name,report_link_name,record_ID,field_link_name,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `download_file_response`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `download_file_response`,
                                properties: download_file_responseFields,
                            });
                        },
                })
                