
                    import { EventHandler } from '@arkw/core';
                    import { apps.secretFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetAppsSecretsFind: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-apps.secret`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { expand,name,scope, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/apps/secrets/find'].get({
                                query: {expand,name,scope,},
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
                