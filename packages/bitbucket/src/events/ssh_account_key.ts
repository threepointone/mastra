
                    import { EventHandler } from '@arkw/core';
                    import { ssh_account_keyFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const ssh_account_key: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-ssh_account_key`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {  selected_user,key_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/users/{selected_user}/ssh-keys/{key_id}'].get({
                                
                                params: {selected_user,key_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ssh_account_key`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ssh_account_key`,
                                properties: ssh_account_keyFields,
                            });
                        },
                })
                