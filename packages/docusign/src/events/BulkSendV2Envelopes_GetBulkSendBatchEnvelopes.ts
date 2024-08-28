
                    import { EventHandler } from '@arkw/core';
                    import { envelopesInformationFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const BulkSendV2Envelopes_GetBulkSendBatchEnvelopes: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-envelopesInformation`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,bulkSendBatchId,count,include,order,order_by,search_text,start_position,status, accountId,bulkSendBatchId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2.1/accounts/{accountId}/bulk_send_batch/{bulkSendBatchId}/envelopes'].get({
                                query: {accountId,bulkSendBatchId,count,include,order,order_by,search_text,start_position,status,},
                                params: {accountId,bulkSendBatchId,} })

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
                