
                    import { EventHandler } from '@arkw/core';
                    import { envelopeTemplateResultsFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const Templates_GetTemplates: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-envelopeTemplateResults`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,count,created_from_date,created_to_date,folder_ids,folder_types,from_date,include,is_deleted_template_only,is_download,modified_from_date,modified_to_date,order,order_by,search_fields,search_text,shared_by_me,start_position,template_ids,to_date,used_from_date,used_to_date,user_filter,user_id, accountId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2.1/accounts/{accountId}/templates'].get({
                                query: {accountId,count,created_from_date,created_to_date,folder_ids,folder_types,from_date,include,is_deleted_template_only,is_download,modified_from_date,modified_to_date,order,order_by,search_fields,search_text,shared_by_me,start_position,template_ids,to_date,used_from_date,used_to_date,user_filter,user_id,},
                                params: {accountId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `envelopeTemplateResults`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `envelopeTemplateResults`,
                                properties: envelopeTemplateResultsFields,
                            });
                        },
                })
                