
                    import { EventHandler } from '@arkw/core';
                    import { workspace_membershipFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const workspace_membership: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-workspace_membership`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {  workspace,member,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/workspaces/{workspace}/members/{member}'].get({
                                
                                params: {workspace,member,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `workspace_membership`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `workspace_membership`,
                                properties: workspace_membershipFields,
                            });
                        },
                })
                