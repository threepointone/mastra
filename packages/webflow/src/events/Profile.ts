
                    import { EventHandler } from '@arkw/core';
                    import { ProfileFields } from '../constants';
                    import { WebflowIntegration } from '..';

                    export const Profile: EventHandler<WebflowIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Profile`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { profileId, profileId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/profiles/{profileId}'].get({
                                query: {profileId,},
                                params: {profileId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Profile`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Profile`,
                                properties: ProfileFields,
                            });
                        },
                })
                