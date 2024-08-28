
                    import { EventHandler } from '@arkw/core';
                    import { keyFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const users_public_ssh_key_for_authenticated_user: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-key`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { key-id,key_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/user/keys/{key_id}'].get({
                                query: {key-id,},
                                params: {key_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `key`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `key`,
                                properties: keyFields,
                            });
                        },
                })
                