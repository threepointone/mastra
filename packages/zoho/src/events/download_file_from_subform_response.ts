
                    import { EventHandler } from '@arkw/core';
                    import { download_file_from_subform_responseFields } from '../constants';
                    import { ZohoIntegration } from '..';

                    export const download_file_from_subform_response: EventHandler<ZohoIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-download_file_from_subform_response`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { account_owner_name,app_link_name,report_link_name,record_ID,subform_link_name,field_link_name,subform_record_ID, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/creator/v2/data/{account_owner_name}/{app_link_name}/report/{report_link_name}/{record_ID}/{subform_link_name}.{field_link_name}/{subform_record_ID}/download'].get({
                                query: {account_owner_name,app_link_name,report_link_name,record_ID,subform_link_name,field_link_name,subform_record_ID,},
                                params: {account_owner_name,app_link_name,report_link_name,record_ID,subform_link_name,field_link_name,subform_record_ID,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `download_file_from_subform_response`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `download_file_from_subform_response`,
                                properties: download_file_from_subform_responseFields,
                            });
                        },
                })
                