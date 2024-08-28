
                    import { EventHandler } from '@arkw/core';
                    import { accountSharedAccessFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const SharedAccess_GetSharedAccess: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-accountSharedAccess`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,count,envelopes_not_shared_user_status,folder_ids,item_type,search_text,shared,start_position,user_ids, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/shared_access'].get({
                                query: {accountId,count,envelopes_not_shared_user_status,folder_ids,item_type,search_text,shared,start_position,user_ids,},
                                params: {accountId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `accountSharedAccess`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `accountSharedAccess`,
                                properties: accountSharedAccessFields,
                            });
                        },
                })
                