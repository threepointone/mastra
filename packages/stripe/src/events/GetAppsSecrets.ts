
                    import { EventHandler } from '@arkw/core';
                    import { apps.secretFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetAppsSecrets: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-apps.secret`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { ending_before,expand,limit,scope,starting_after,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v1/apps/secrets'].get({
                                query: {ending_before,expand,limit,scope,starting_after,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `apps.secret`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `apps.secret`,
                                properties: apps.secretFields,
                            });
                        },
                })
                