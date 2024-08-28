
                    import { EventHandler } from '@arkw/core';
                    import { CommunityFields } from '../constants';
                    import { Ring-centralIntegration } from '..';

                    export const Community: EventHandler<Ring-centralIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Community`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { communityId, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/communities/{communityId}'].get({
                                query: {communityId,},
                                params: {communityId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Community`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Community`,
                                properties: CommunityFields,
                            });
                        },
                })
                