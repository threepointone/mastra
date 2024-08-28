
                    import { EventHandler } from '@arkw/core';
                    import { bulkSendingListSummariesFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const BulkSendV2CRUD_GetBulkSendLists: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-bulkSendingListSummaries`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/bulk_send_lists'].get({
                                query: {accountId,},
                                params: {accountId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `bulkSendingListSummaries`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `bulkSendingListSummaries`,
                                properties: bulkSendingListSummariesFields,
                            });
                        },
                })
                