
                    import { EventHandler } from '@arkw/core';
                    import { bulkSendBatchSummariesFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const BulkSendV2Batch_GetBulkSendBatches: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-bulkSendBatchSummaries`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,batch_ids,count,from_date,search_text,start_position,status,to_date,user_id, accountId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2.1/accounts/{accountId}/bulk_send_batch'].get({
                                query: {accountId,batch_ids,count,from_date,search_text,start_position,status,to_date,user_id,},
                                params: {accountId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `bulkSendBatchSummaries`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `bulkSendBatchSummaries`,
                                properties: bulkSendBatchSummariesFields,
                            });
                        },
                })
                