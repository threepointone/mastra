
                    import { EventHandler } from '@arkw/core';
                    import { licenseFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const licenses: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-license`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { license, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/licenses/{license}'].get({
                                query: {license,},
                                params: {license,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `license`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `license`,
                                properties: licenseFields,
                            });
                        },
                })
                