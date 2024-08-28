
                    import { EventHandler } from '@arkw/core';
                    import { bulkSendingListFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const BulkSendV2CRUD_GetBulkSendList: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-bulkSendingList`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,bulkSendListId, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/bulk_send_lists/{bulkSendListId}'].get({
                                query: {accountId,bulkSendListId,},
                                params: {accountId,bulkSendListId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `bulkSendingList`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `bulkSendingList`,
                                properties: bulkSendingListFields,
                            });
                        },
                })
                