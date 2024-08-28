
                    import { EventHandler } from '@arkw/core';
                    import { SSIOAccountResponseFields } from '../constants';
                    import { PinterestIntegration } from '..';

                    export const ssio_accounts: EventHandler<PinterestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-SSIOAccountResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { path_ad_account_id,ad_account_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/ad_accounts/{ad_account_id}/ssio/accounts'].get({
                                query: {path_ad_account_id,},
                                params: {ad_account_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `SSIOAccountResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `SSIOAccountResponse`,
                                properties: SSIOAccountResponseFields,
                            });
                        },
                })
                