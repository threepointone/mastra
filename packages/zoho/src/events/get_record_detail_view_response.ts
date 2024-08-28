
                    import { EventHandler } from '@arkw/core';
                    import { get_record_detail_view_responseFields } from '../constants';
                    import { ZohoIntegration } from '..';

                    export const get_record_detail_view_response: EventHandler<ZohoIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-get_record_detail_view_response`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { account_owner_name,app_link_name,report_link_name,record_ID, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/creator/v2/data/{account_owner_name}/{app_link_name}/report/{report_link_name}/{record_ID}'].get({
                                query: {account_owner_name,app_link_name,report_link_name,record_ID,},
                                params: {account_owner_name,app_link_name,report_link_name,record_ID,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `get_record_detail_view_response`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `get_record_detail_view_response`,
                                properties: get_record_detail_view_responseFields,
                            });
                        },
                })
                