
                    import { EventHandler } from '@arkw/core';
                    import { EmailAliasesFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const _users_id_email_aliases: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-EmailAliases`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { user_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/users/{user_id}/email_aliases'].get({
                                query: {user_id,},
                                params: {user_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `EmailAliases`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `EmailAliases`,
                                properties: EmailAliasesFields,
                            });
                        },
                })
                