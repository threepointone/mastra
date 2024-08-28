
                    import { EventHandler } from '@arkw/core';
                    import { get_fields_responseFields } from '../constants';
                    import { ZohoIntegration } from '..';

                    export const get_fields_response: EventHandler<ZohoIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-get_fields_response`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { account_owner_name,app_link_name,form_link_name, account_owner_name,app_link_name,form_link_name,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/creator/v2/meta/{account_owner_name}/{app_link_name}/form/{form_link_name}/fields'].get({
                                query: {account_owner_name,app_link_name,form_link_name,},
                                params: {account_owner_name,app_link_name,form_link_name,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `get_fields_response`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `get_fields_response`,
                                properties: get_fields_responseFields,
                            });
                        },
                })
                