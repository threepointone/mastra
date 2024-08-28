
                    import { EventHandler } from '@arkw/core';
                    import { paginated_ssh_user_keysFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const paginated_ssh_user_keys: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-paginated_ssh_user_keys`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {  selected_user,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/users/{selected_user}/ssh-keys'].get({
                                
                                params: {selected_user,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `paginated_ssh_user_keys`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `paginated_ssh_user_keys`,
                                properties: paginated_ssh_user_keysFields,
                            });
                        },
                })
                