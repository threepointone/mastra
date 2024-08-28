
                    import { EventHandler } from '@arkw/core';
                    import { gpg-keyFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const users-gpg-key-for-authenticated-user: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-gpg-key`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { gpg-key-id, gpg_key_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/user/gpg_keys/{gpg_key_id}'].get({
                                query: {gpg-key-id,},
                                params: {gpg_key_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `gpg-key`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `gpg-key`,
                                properties: gpg-keyFields,
                            });
                        },
                })
                