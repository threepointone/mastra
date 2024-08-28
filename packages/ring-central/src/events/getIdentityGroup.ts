
                    import { EventHandler } from '@arkw/core';
                    import { IdentityGroupFields } from '../constants';
                    import { Ring-centralIntegration } from '..';

                    export const getIdentityGroup: EventHandler<Ring-centralIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-IdentityGroup`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { identityGroupId, identityGroupId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/identity_groups/{identityGroupId}'].get({
                                query: {identityGroupId,},
                                params: {identityGroupId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `IdentityGroup`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `IdentityGroup`,
                                properties: IdentityGroupFields,
                            });
                        },
                })
                