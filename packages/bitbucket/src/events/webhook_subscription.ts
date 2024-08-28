
                    import { EventHandler } from '@arkw/core';
                    import { webhook_subscriptionFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const webhook_subscription: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-webhook_subscription`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {  workspace,uid,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/workspaces/{workspace}/hooks/{uid}'].get({
                                
                                params: {workspace,uid,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `webhook_subscription`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `webhook_subscription`,
                                properties: webhook_subscriptionFields,
                            });
                        },
                })
                