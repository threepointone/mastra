
                    import { EventHandler } from '@arkw/core';
                    import { signingGroupFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const SigningGroups_GetSigningGroup: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-signingGroup`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,signingGroupId, accountId,signingGroupId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2.1/accounts/{accountId}/signing_groups/{signingGroupId}'].get({
                                query: {accountId,signingGroupId,},
                                params: {accountId,signingGroupId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `signingGroup`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `signingGroup`,
                                properties: signingGroupFields,
                            });
                        },
                })
                