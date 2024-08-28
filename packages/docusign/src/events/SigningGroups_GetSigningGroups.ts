
                    import { EventHandler } from '@arkw/core';
                    import { signingGroupInformationFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const SigningGroups_GetSigningGroups: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-signingGroupInformation`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,group_type,include_users, accountId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/signing_groups'].get({
                                query: {accountId,group_type,include_users,},
                                params: {accountId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `signingGroupInformation`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `signingGroupInformation`,
                                properties: signingGroupInformationFields,
                            });
                        },
                })
                