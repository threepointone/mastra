
                    import { EventHandler } from '@arkw/core';
                    import { webhook-configFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const orgs-webhook-config-for-org: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-webhook-config`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { org,hook-id, org,hook_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/orgs/{org}/hooks/{hook_id}/config'].get({
                                query: {org,hook-id,},
                                params: {org,hook_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `webhook-config`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `webhook-config`,
                                properties: webhook-configFields,
                            });
                        },
                })
                