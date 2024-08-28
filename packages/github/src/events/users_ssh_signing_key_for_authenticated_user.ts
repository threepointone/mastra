
                    import { EventHandler } from '@arkw/core';
                    import { ssh-signing-keyFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const users_ssh_signing_key_for_authenticated_user: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-ssh-signing-key`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { ssh-signing-key-id,ssh_signing_key_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/user/ssh_signing_keys/{ssh_signing_key_id}'].get({
                                query: {ssh-signing-key-id,},
                                params: {ssh_signing_key_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ssh-signing-key`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ssh-signing-key`,
                                properties: ssh-signing-keyFields,
                            });
                        },
                })
                