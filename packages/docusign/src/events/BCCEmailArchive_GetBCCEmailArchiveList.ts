
                    import { EventHandler } from '@arkw/core';
                    import { bccEmailArchiveListFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const BCCEmailArchive_GetBCCEmailArchiveList: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-bccEmailArchiveList`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,count,start_position, accountId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2.1/accounts/{accountId}/settings/bcc_email_archives'].get({
                                query: {accountId,count,start_position,},
                                params: {accountId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `bccEmailArchiveList`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `bccEmailArchiveList`,
                                properties: bccEmailArchiveListFields,
                            });
                        },
                })
                