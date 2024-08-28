
                    import { EventHandler } from '@arkw/core';
                    import { userFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const user: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-user`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { workspace,project_key,selected_user, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/workspaces/{workspace}/projects/{project_key}/default-reviewers/{selected_user}'].get({
                                
                                params: {workspace,project_key,selected_user,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `user`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `user`,
                                properties: userFields,
                            });
                        },
                })
                