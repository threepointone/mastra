
                    import { EventHandler } from '@arkw/core';
                    import { marketplace-purchaseFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const apps_subscription_plan_for_account_stubbed: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-marketplace-purchase`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { account-id,account_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/marketplace_listing/stubbed/accounts/{account_id}'].get({
                                query: {account-id,},
                                params: {account_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `marketplace-purchase`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `marketplace-purchase`,
                                properties: marketplace-purchaseFields,
                            });
                        },
                })
                