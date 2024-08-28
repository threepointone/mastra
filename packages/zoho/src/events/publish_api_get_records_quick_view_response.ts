
                    import { EventHandler } from '@arkw/core';
                    import { publish_api_get_records_quick_view_responseFields } from '../constants';
                    import { ZohoIntegration } from '..';

                    export const publish_api_get_records_quick_view_response: EventHandler<ZohoIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-publish_api_get_records_quick_view_response`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { account_owner_name,app_link_name,report_link_name,privatelink,from,limit,criteria, account_owner_name,app_link_name,report_link_name,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/creator/v2/publish/{account_owner_name}/{app_link_name}/report/{report_link_name}'].get({
                                query: {account_owner_name,app_link_name,report_link_name,privatelink,from,limit,criteria,},
                                params: {account_owner_name,app_link_name,report_link_name,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `publish_api_get_records_quick_view_response`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `publish_api_get_records_quick_view_response`,
                                properties: publish_api_get_records_quick_view_responseFields,
                            });
                        },
                })
                