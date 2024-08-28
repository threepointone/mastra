
                    import { EventHandler } from '@arkw/core';
                    import { bulkSendBatchStatusFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const BulkSendV2Batch_GetBulkSendBatchStatus: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-bulkSendBatchStatus`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,bulkSendBatchId, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/bulk_send_batch/{bulkSendBatchId}'].get({
                                query: {accountId,bulkSendBatchId,},
                                params: {accountId,bulkSendBatchId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `bulkSendBatchStatus`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `bulkSendBatchStatus`,
                                properties: bulkSendBatchStatusFields,
                            });
                        },
                })
                