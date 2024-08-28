
                    import { EventHandler } from '@arkw/core';
                    import { envelopesInformationFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const Envelopes_GetEnvelopes: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-envelopesInformation`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,ac_status,block,cdse_mode,continuation_token,count,custom_field,email,envelope_ids,exclude,folder_ids,folder_types,from_date,from_to_status,include,include_purge_information,intersecting_folder_ids,last_queried_date,order,order_by,powerformids,query_budget,requester_date_format,search_text,start_position,status,to_date,transaction_ids,user_filter,user_id,user_name, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/envelopes'].get({
                                query: {accountId,ac_status,block,cdse_mode,continuation_token,count,custom_field,email,envelope_ids,exclude,folder_ids,folder_types,from_date,from_to_status,include,include_purge_information,intersecting_folder_ids,last_queried_date,order,order_by,powerformids,query_budget,requester_date_format,search_text,start_position,status,to_date,transaction_ids,user_filter,user_id,user_name,},
                                params: {accountId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `envelopesInformation`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `envelopesInformation`,
                                properties: envelopesInformationFields,
                            });
                        },
                })
                