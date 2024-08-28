
                    import { EventHandler } from '@arkw/core';
                    import { paginated_webhook_subscriptionsFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const paginated_webhook_subscriptions: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-paginated_webhook_subscriptions`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { workspace, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/workspaces/{workspace}/hooks'].get({
                                
                                params: {workspace,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `paginated_webhook_subscriptions`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `paginated_webhook_subscriptions`,
                                properties: paginated_webhook_subscriptionsFields,
                            });
                        },
                })
                