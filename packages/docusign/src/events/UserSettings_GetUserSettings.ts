
                    import { EventHandler } from '@arkw/core';
                    import { userSettingsInformationFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const UserSettings_GetUserSettings: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-userSettingsInformation`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,userId, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/users/{userId}/settings'].get({
                                query: {accountId,userId,},
                                params: {accountId,userId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `userSettingsInformation`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `userSettingsInformation`,
                                properties: userSettingsInformationFields,
                            });
                        },
                })
                