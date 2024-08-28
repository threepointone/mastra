
                    import { EventHandler } from '@arkw/core';
                    import { IdentityFields } from '../constants';
                    import { Ring-centralIntegration } from '..';

                    export const Identity: EventHandler<Ring-centralIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Identity`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { identityId, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/identities/{identityId}'].get({
                                query: {identityId,},
                                params: {identityId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Identity`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Identity`,
                                properties: IdentityFields,
                            });
                        },
                })
                