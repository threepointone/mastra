
                    import { EventHandler } from '@arkw/core';
                    import { customSettingsInformationFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const UserCustomSettings_GetCustomSettings: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-customSettingsInformation`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,userId, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/users/{userId}/custom_settings'].get({
                                query: {accountId,userId,},
                                params: {accountId,userId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `customSettingsInformation`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `customSettingsInformation`,
                                properties: customSettingsInformationFields,
                            });
                        },
                })
                