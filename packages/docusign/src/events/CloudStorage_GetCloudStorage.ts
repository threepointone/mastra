
                    import { EventHandler } from '@arkw/core';
                    import { cloudStorageProvidersFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const CloudStorage_GetCloudStorage: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-cloudStorageProviders`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,serviceId,userId,redirectUrl, accountId,userId,serviceId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/users/{userId}/cloud_storage/{serviceId}'].get({
                                query: {accountId,serviceId,userId,redirectUrl,},
                                params: {accountId,userId,serviceId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `cloudStorageProviders`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `cloudStorageProviders`,
                                properties: cloudStorageProvidersFields,
                            });
                        },
                })
                