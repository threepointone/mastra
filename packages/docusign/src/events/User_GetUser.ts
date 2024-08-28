
                    import { EventHandler } from '@arkw/core';
                    import { userInformationFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const User_GetUser: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-userInformation`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,userId,additional_info,email, accountId,userId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2.1/accounts/{accountId}/users/{userId}'].get({
                                query: {accountId,userId,additional_info,email,},
                                params: {accountId,userId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `userInformation`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `userInformation`,
                                properties: userInformationFields,
                            });
                        },
                })
                