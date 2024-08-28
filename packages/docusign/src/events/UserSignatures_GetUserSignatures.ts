
                    import { EventHandler } from '@arkw/core';
                    import { userSignaturesInformationFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const UserSignatures_GetUserSignatures: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-userSignaturesInformation`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,userId,stamp_type, accountId,userId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2.1/accounts/{accountId}/users/{userId}/signatures'].get({
                                query: {accountId,userId,stamp_type,},
                                params: {accountId,userId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `userSignaturesInformation`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `userSignaturesInformation`,
                                properties: userSignaturesInformationFields,
                            });
                        },
                })
                