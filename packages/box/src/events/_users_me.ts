
                    import { EventHandler } from '@arkw/core';
                    import { User--FullFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const _users_me: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-User--Full`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { fields, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/users/me'].get({
                                query: {fields,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `User--Full`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `User--Full`,
                                properties: User--FullFields,
                            });
                        },
                })
                