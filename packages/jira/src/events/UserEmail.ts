
                    import { EventHandler } from '@arkw/core';
                    import { UnrestrictedUserEmailFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const UserEmail: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-UnrestrictedUserEmail`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/user/email'].get({
                                query: {accountId,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `UnrestrictedUserEmail`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `UnrestrictedUserEmail`,
                                properties: UnrestrictedUserEmailFields,
                            });
                        },
                })
                