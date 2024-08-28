
                    import { EventHandler } from '@arkw/core';
                    import { InviteFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const _invites_id: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Invite`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { invite_id,fields, invite_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/invites/{invite_id}'].get({
                                query: {invite_id,fields,},
                                params: {invite_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Invite`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Invite`,
                                properties: InviteFields,
                            });
                        },
                })
                