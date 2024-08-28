
                    import { EventHandler } from '@arkw/core';
                    import { SettingsFields } from '../constants';
                    import { Ring-centralIntegration } from '..';

                    export const AllSettings: EventHandler<Ring-centralIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Settings`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/settings'].get({
                                
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Settings`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Settings`,
                                properties: SettingsFields,
                            });
                        },
                })
                