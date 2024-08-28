
                    import { EventHandler } from '@arkw/core';
                    import { AnnouncementBannerConfigurationFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const Banner: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-AnnouncementBannerConfiguration`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/announcementBanner'].get({
                                
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `AnnouncementBannerConfiguration`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `AnnouncementBannerConfiguration`,
                                properties: AnnouncementBannerConfigurationFields,
                            });
                        },
                })
                