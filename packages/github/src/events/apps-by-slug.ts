
                    import { EventHandler } from '@arkw/core';
                    import { integrationFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const apps-by-slug: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-integration`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { app-slug, app_slug,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/apps/{app_slug}'].get({
                                query: {app-slug,},
                                params: {app_slug,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `integration`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `integration`,
                                properties: integrationFields,
                            });
                        },
                })
                