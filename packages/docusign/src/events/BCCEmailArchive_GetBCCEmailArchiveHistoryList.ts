
                    import { EventHandler } from '@arkw/core';
                    import { bccEmailArchiveHistoryListFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const BCCEmailArchive_GetBCCEmailArchiveHistoryList: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-bccEmailArchiveHistoryList`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,bccEmailArchiveId,count,start_position, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/settings/bcc_email_archives/{bccEmailArchiveId}'].get({
                                query: {accountId,bccEmailArchiveId,count,start_position,},
                                params: {accountId,bccEmailArchiveId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `bccEmailArchiveHistoryList`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `bccEmailArchiveHistoryList`,
                                properties: bccEmailArchiveHistoryListFields,
                            });
                        },
                })
                